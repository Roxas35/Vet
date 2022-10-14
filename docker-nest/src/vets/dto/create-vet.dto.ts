import { IsNotEmpty, MinLength} from 'class-validator'

export class CreateVetDto {
    @IsNotEmpty()
    @MinLength(3)
    first_name: string

    @IsNotEmpty()
    @MinLength(2)
    last_name: string

}
