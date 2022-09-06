import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {

  getUserByUserName(userName: string): Promise<User> {
    return this.findOne({
      where: {
        username: userName
      }
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, password } = createUserDto;
    const userCreated = this.create({
      username,
      password,
    });
    await this.save(userCreated);
    return userCreated;
  }

  async deleteUser(id: number): Promise<number> {
    const result = await this.softDelete({
      userId: id,
    });
    return result.affected;
  }

}
