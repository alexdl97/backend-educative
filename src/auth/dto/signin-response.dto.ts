import { User } from "src/modules/users/user.entity";

export class SignInResponseDto {
  user: User;
  accessToken: string;
  constructor(user: User, accesstoken: string) {
    this.user = user;
    this.accessToken = accesstoken;
  }
}
