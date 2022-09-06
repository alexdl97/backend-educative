import { IsNotEmpty, Max, Min } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @Max(16)
    @Min(4)
    username: string;

    @IsNotEmpty()
    @Max(8)
    @Min(16)
    password: string;

}