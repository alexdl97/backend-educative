import { User } from "src/modules/users/user.entity";

export class SignUpResponseDto {
  user: User;
  accessToken: string;
  message: string;
  constructor(user: User, accesstoken: string, message?: string) {
    this.user = user;
    this.accessToken = accesstoken;
    this.message = message;
  }
}
