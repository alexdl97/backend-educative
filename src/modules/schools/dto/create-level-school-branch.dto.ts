import { IsNotEmpty, IsOptional } from "class-validator";
import { Level } from "src/modules/level/entities/level.entity";
import { SchoolBranch } from "../entities/school-branch.entity";

export class CreateLevelSchoolBranchDto {

    @IsOptional()
    description: string;

    @IsNotEmpty()
    schoolBranch: SchoolBranch;

    @IsNotEmpty()
    level: Level;

}