import { IsNotEmpty } from 'class-validator';
import { SchoolBranch } from '../entities/school-branch.entity';

export class CreateFileSchoolBranchDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  path: string;

  @IsNotEmpty()
  mimeType: string;

  @IsNotEmpty()
  extension: string;

  description?: string;

  @IsNotEmpty()
  schoolBranch: SchoolBranch;
}
