import { Injectable } from '@nestjs/common';
import { CreateSpecialtieDto } from './dto/create-specialtie.dto';
import { UpdateSpecialtieDto } from './dto/update-specialtie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specialtie } from 'src/entities/specialties.entity';

@Injectable()
export class SpecialtiesService {
    constructor(
    @InjectRepository(Specialtie) private readonly specialtie:
    Repository<Specialtie>
    ) {}

    create(createSpecialtieDto: CreateSpecialtieDto){
      const specialtie = this.specialtie.create(createSpecialtieDto)
      return this.specialtie.save(specialtie)
    }
  
    findAll() {
      return this.specialtie.find()
    }

    async update(id: number, userData: UpdateSpecialtieDto) {
      return this.specialtie.update({ id }, userData)
    }

    remove(id: number){
      return this.specialtie.delete({ id })
    }

    findOne(id: number) {
      return this.specialtie.find({ 
        where: { id }
      })
    }
}

