import { User } from 'src/modules/users/user.entity';

export class AuthCredentialsDtoResponse {
  user: User;
  accessToken: string;
  constructor(user: User, accesstoken: string) {
    this.user = user;
    this.accessToken = accesstoken;
  }
}
