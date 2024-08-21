import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateAnswerDto {
    @IsString()
    @Length(6)
    @IsNotEmpty()
    body: string;
}
