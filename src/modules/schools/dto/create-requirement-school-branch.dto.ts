import { IsNotEmpty, IsOptional } from "class-validator";
import { RequirementType } from "src/modules/requeriment-type/entities/requirement-type.entity";
import { SchoolBranch } from "../entities/school-branch.entity";

export class createRequirementSchoolBranchDto {

    @IsOptional()
    name: string;

    @IsOptional()
    description: string;

    @IsNotEmpty()
    schoolBranch: SchoolBranch;

    @IsNotEmpty()
    requirementType: RequirementType;

}