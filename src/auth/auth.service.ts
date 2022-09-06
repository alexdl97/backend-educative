import {
  ConflictException,
  HttpService,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/users/user.entity';
import { UsersRepository } from 'src/modules/users/users.repository';
import { SignInDto } from './dto/signin.dto';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './dto/jwt-payload.interfaces';
import { AuthCredentialsDtoResponse } from './dto/auth-credentials-response.dto';
import { ConfigService } from 'src/config/config.service';
import { LoginTicket, OAuth2Client } from 'google-auth-library';
import { SignInResponseDto } from './dto/signin-response.dto';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { TypeAuthEnum } from './enum/type-auth.enum';
import { SignUpDto } from './dto/signup.dto';
import { UsersService } from 'src/modules/users/users.service';
import { SignUpResponseDto } from './dto/signup-response.dto';
import nodemailer = require('nodemailer');
import { EmailConfirmationDto } from './dto/email-confirmation.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    const { username, password, typeAuth, tokenId } = signUpDto;
    await this.usersService.checkIfUserNameExists(username);

    if (typeAuth == TypeAuthEnum.EMAIL) {
      const salt = await bcrypt.genSalt();
      const hasedPassword = await bcrypt.hash(password, salt);
      const newUser = await this.usersRepository.createUser({
        username,
        password: hasedPassword,
      });
      const payload: JwtPayload = { username };
      const token = this.jwtService.sign(payload);
      this.sendVerificationEmail(username, token);
      return this.responseSignUpSuccessfull(null, 'Debes verificar tu correo.');
    } else if (typeAuth == TypeAuthEnum.GOOGLE) {
      const isValid = await this.verifyGoogleTokenId(tokenId);
      if (isValid) {
        const newUser = await this.usersRepository.createUser({
          username,
          password: null,
        });
        return this.responseSignUpSuccessfull(newUser);
      }
    } else if (typeAuth == TypeAuthEnum.FACEBOOK) {
      const isValid = await this.verifyFacebookToken(tokenId);
      if (isValid) {
        const newUser = await this.usersRepository.createUser({
          username,
          password: null,
        });
        return this.responseSignUpSuccessfull(newUser);
      }
    }

    throw new ConflictException(
      'Token is not valid',
      'The token sended is not valid or expired',
    );
  }

  async signIn(signInDto: SignInDto): Promise<SignInResponseDto> {
    const { username, password, typeAuth, tokenId } = signInDto;
    if (typeAuth == TypeAuthEnum.EMAIL) {
      const user = await this.usersRepository.findOne({ username });
      const match = user && await bcrypt.compare(password, user.password);
      if (user && match) {
        if (!user.verifiedEmail) {
          throw new ConflictException(
            "Unverified email",
            "Your email was not verified. Can't login if don't verify your email"
          );
        }
        return this.responseSignInSuccessfull(user);
      }
    } else if (typeAuth == TypeAuthEnum.GOOGLE) {
      const result: LoginTicket = await this.verifyGoogleTokenId(tokenId);
      if (result) {
        const payload = result.getPayload();
        const userFind = await this.usersRepository.getUserByUserName(
          payload.email,
        );
        if (userFind) return this.responseSignInSuccessfull(userFind);
        
        const newUser = await this.usersRepository.createUser({
          username: payload.email,
          password: null,
        });
        return this.responseSignInSuccessfull(newUser);
      }
    } else if (typeAuth == TypeAuthEnum.FACEBOOK) {
      const isValid = await this.verifyFacebookToken(tokenId);
      if (isValid && username) {
        const userFind = await this.usersRepository.getUserByUserName(username);
        if (userFind) return this.responseSignInSuccessfull(userFind);
        const newUser = await this.usersRepository.createUser({
          username: username,
          password: null,
        });
        return this.responseSignInSuccessfull(newUser);
      }
    }
    throw new UnauthorizedException('Please check your login credentials');
  }

  async verifyEmailConfirmation(emailConfirmationDto: EmailConfirmationDto): Promise<SignUpResponseDto> {
    try {
      const { token } = emailConfirmationDto;
      const decodeData = this.jwtService.verify(token);
      if (decodeData) {
        const { username } = decodeData;
        const userFind = await this.usersRepository.findOne({ username });
        userFind.verifiedEmail = true;
        this.usersRepository.save(userFind);
        return this.responseSignUpSuccessfull(userFind);
      }
      throw new UnauthorizedException('Token is not valid or expired');
    } catch (error) {
      throw new UnauthorizedException('Token is not valid or expired');
    }
  }

  responseSignUpSuccessfull(user: User, message?: string): SignUpResponseDto {
    if (message) return new SignUpResponseDto(null, null, message);
    const jwtPayload: JwtPayload = { username: user.username };
    const accessToken = this.jwtService.sign(jwtPayload);
    return new SignUpResponseDto(user, accessToken);
  }

  responseSignInSuccessfull(user: User): SignInResponseDto {
    const jwtPayload: JwtPayload = { username: user.username };
    const accessToken = this.jwtService.sign(jwtPayload);
    return new SignInResponseDto(user, accessToken);
  }

  async verifyGoogleTokenId(tokenId: string): Promise<LoginTicket> {
    try {
      const client = new OAuth2Client(
        this.configService.ENVIROMENT.GOOGLE_OAUTH_CLIENT_ID,
      );
      return await client.verifyIdToken({
        idToken: tokenId,
        audience: this.configService.ENVIROMENT.GOOGLE_OAUTH_CLIENT_ID,
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async verifyFacebookToken(token: string) {
    try {
      const { FACEBOOK_URL_DEBUG_TOKEN, FACEBOOK_APP_TOKEN } =
        this.configService.ENVIROMENT;
      const result = await this.httpService
        .get(FACEBOOK_URL_DEBUG_TOKEN, {
          params: {
            input_token: token,
            access_token: FACEBOOK_APP_TOKEN,
          },
        })
        .toPromise();
      if (result.status == 200) return result?.data?.data?.is_valid;
      return false;
    } catch (error) {
      console.log('Error ', error);
      return false;
    }
  }

  async sendVerificationEmail(email: string, token: string): Promise<void> {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'hekacorp2021@gmail.com',
        pass: 'hk%20200318'
      }
    });
    let info = await transporter.sendMail({
      from: 'hekacorp20221@gmail.com',
      to: email,
      subject: 'Verificar Correo',
      html: `Verifica tu correo haciendo click => <strong><a href="http://localhost:3000/auth/verifyEmail/${token}">Verificar Correo</a></strong>`,
    });
    console.log(info);
  }
}
