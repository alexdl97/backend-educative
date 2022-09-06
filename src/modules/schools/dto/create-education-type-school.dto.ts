import { isNotEmpty, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EducationType } from 'src/modules/education-type/entities/education-type.entity';
import { SchoolBranch } from '../entities/school-branch.entity';

export class CreateEducationTypeSchoolDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  price: number;
  
  @IsNotEmpty()
  educationType: EducationType;
}
