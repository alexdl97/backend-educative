import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { SchoolBranch } from "../entities/school-branch.entity";

export class CreateCharactDetSchoolDto {

    @IsString()
    @IsNotEmpty()
    value: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsNotEmpty()
    schoolBranch: SchoolBranch;

}