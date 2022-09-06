import { IsNotEmpty, IsOptional } from "class-validator";
import { SchoolBranch } from "../entities/school-branch.entity";

export class CreateGradeSchoolBranchDto {

    @IsOptional()
    parallel: string;

    @IsOptional()
    shift: string;

    @IsNotEmpty()
    schoolBranch: SchoolBranch;
}