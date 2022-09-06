import { IsEnum, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { TypeAuthEnum } from '../enum/type-auth.enum';

export class SignInDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(255)
  username: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @MaxLength(32)
//   @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
//     message: 'password is too weak',
//   })
  password: string;

  @IsOptional()
  @IsString()
  tokenId: string;

  @IsNotEmpty()
  @IsEnum(TypeAuthEnum)
  typeAuth: TypeAuthEnum

}
