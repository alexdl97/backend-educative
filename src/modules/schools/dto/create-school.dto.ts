import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';
import { City } from 'src/modules/city/entities/city.entity';
import { SchoolType } from 'src/modules/school-type/entities/school-type.entity';
import { CreateCharactDetSchoolDto } from './create-charact-det-school.dto';
import { CreateEducationTypeSchoolDto } from './create-education-type-school.dto';

export class CreateSchoolDto {
  @IsOptional()
  @IsString()
  code: string;

  @IsNotEmpty()
  @Length(4, 255)
  name: string;

  @IsOptional()
  @MaxLength(255)
  description: string;

  @IsOptional()
  @Length(0, 255)
  mission: string;

  @IsOptional()
  @Length(0, 255)
  vision: string;

  @IsNotEmpty()
  city: City;

  @IsNotEmpty()
  schoolType: SchoolType;

  @IsNotEmpty()
  createEducationTypesSchool: CreateEducationTypeSchoolDto[];

  @IsNotEmpty()
  createCharactDetSchoolDto: CreateCharactDetSchoolDto[]

}
