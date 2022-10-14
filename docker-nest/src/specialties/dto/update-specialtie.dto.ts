import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecialtieDto } from './create-specialtie.dto';

export class UpdateSpecialtieDto extends PartialType(CreateSpecialtieDto) {}
