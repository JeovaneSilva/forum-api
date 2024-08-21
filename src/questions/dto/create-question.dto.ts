import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateQuestionDto {

    @IsString()
    @Length(3)
    @IsNotEmpty()
    title: string;

    @IsString()
    @Length(3)
    @IsNotEmpty()
    body: string;
}
