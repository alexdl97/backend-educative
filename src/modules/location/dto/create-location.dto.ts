import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class createLocationDto {
  @IsString()
  @IsOptional()
  address: string;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;
}
