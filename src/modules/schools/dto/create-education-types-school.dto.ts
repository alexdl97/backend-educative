import { IsNotEmpty } from "class-validator";
import { EducationType } from "src/modules/education-type/entities/education-type.entity";
import { SchoolBranch } from "../entities/school-branch.entity";

export class CreateEducationTypesSchoolDto1 {

    @IsNotEmpty()
    schoolBranch: SchoolBranch;
    
    @IsNotEmpty()
    educationTypes: EducationType[]

}
