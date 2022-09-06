import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}

  getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getUserById(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  // createUser(createUserDto: CreateUserDto): Promise<User> {
  //   try {
  //     const { username, password } = createUserDto;
  //     return this.usersRepository.createUser(createUserDto);
  //   } catch (error) {
  //     console.log('CODE ', error.code);
  //     console.log('ERROR => ', error);
  //     return null;
  //   }
  // }

  async checkIfUserNameExists(username: string): Promise<void> {
    const user = await this.usersRepository.findOne({ username });
    if (user) {
      throw new ConflictException(
        'User already exists',
        'There is a user already exists',
      );
    }
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.deleteUser(id);
  }
}
