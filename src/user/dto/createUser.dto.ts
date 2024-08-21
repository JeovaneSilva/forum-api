import { IsAlpha, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(3)
    name: string;

    @IsAlpha()
    @IsNotEmpty()
    @Length(6)
    password: string;
}
