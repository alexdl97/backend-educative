import { IsNotEmpty, IsOptional, IsString, Length, Max, Min } from 'class-validator';

export class CreateSocialMediaDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 255)
  name: string;

  @IsString()
  link: string;

  @IsOptional()
  @IsString()
  description: string;
  
}
