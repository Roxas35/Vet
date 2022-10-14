import { IsNotEmpty, MinLength } from 'class-validator'

export class CreateTypeDto {
    @IsNotEmpty()
    @MinLength(3)
    name: string

}