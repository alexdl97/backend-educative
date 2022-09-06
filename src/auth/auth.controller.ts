import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { User } from 'src/modules/users/user.entity';
import { AuthService } from './auth.service';
import { AuthCredentialsDtoResponse } from './dto/auth-credentials-response.dto';
import { SignInDto } from './dto/signin.dto';

import { OAuth2Client } from 'google-auth-library';
import { SignInResponseDto } from './dto/signin-response.dto';
import { SignUpResponseDto } from './dto/signup-response.dto';
import { EmailConfirmationResponseDto } from './dto/email-confirmation-response.dto';
import { EmailConfirmationDto } from './dto/email-confirmation.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() signInDto: SignInDto): Promise<SignUpResponseDto> {
    return this.authService.signUp(signInDto);
  }

  @Post('signin')
  signIn(@Body() signInDto: SignInDto): Promise<SignInResponseDto> {
    return this.authService.signIn(signInDto);
  }

  @Post('sendEmail')
  async verifyToken(@Body() body) {
    // this.authService.sendVerificationEmail('alexdl97x@gmail.com');
  }

  @Post('verifyEmailConfirmation')
  async verifyEmailConfirmation(
    @Body() emailConfirmationDto: EmailConfirmationDto,
  ): Promise<SignUpResponseDto> {
    return this.authService.verifyEmailConfirmation(emailConfirmationDto);
  }
}
