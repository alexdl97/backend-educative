import { IsInt, IsNotEmpty, IsOptional, IsString, Length, Max, Min } from "class-validator";
import { SchoolBranch } from "src/modules/schools/entities/school-branch.entity";

export class CreateReferenceDto {

    @IsString()
    person: string;

    @IsString()
    // @Length(5, 20)
    phone: string;

    @IsOptional()
    description: string;

    @IsNotEmpty()
    schoolBranch: SchoolBranch;
    
}