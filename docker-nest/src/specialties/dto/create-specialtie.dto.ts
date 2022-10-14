import { IsNotEmpty, MinLength} from 'class-validator'

export class CreateSpecialtieDto {
    @IsNotEmpty()
    @MinLength(3)
    name: string

}
