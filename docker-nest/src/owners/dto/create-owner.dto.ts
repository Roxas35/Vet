import { IsNotEmpty, MinLength } from 'class-validator'

export class CreateOwnerDto {
    @IsNotEmpty()
    @MinLength(3)
    firstname: string

    @IsNotEmpty()
    @MinLength(8)
    lastname: string

    @IsNotEmpty()
    @MinLength(5)
    address: string

    @IsNotEmpty()
    @MinLength(2)
    city: string

    @IsNotEmpty()
    @MinLength(2)
    telephone: string
}