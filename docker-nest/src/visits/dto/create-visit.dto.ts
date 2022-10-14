import { IsNotEmpty, MinLength} from 'class-validator'

export class CreateVisitDto {
    @IsNotEmpty()
    @MinLength(3)
    visit_date: string

    @IsNotEmpty()
    @MinLength(2)
    description: string

}
