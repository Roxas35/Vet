import { IsNotEmpty, MinLength} from 'class-validator'

export class CreatePetDto {
    @IsNotEmpty()
    @MinLength(3)
    name: string

    @IsNotEmpty()
    @MinLength(8)
    birthdate: string

}
