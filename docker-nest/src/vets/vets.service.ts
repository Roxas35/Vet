import { Injectable } from '@nestjs/common';
import { CreateVetDto } from './dto/create-vet.dto';
import { UpdateVetDto } from './dto/update-vet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vet } from 'src/entities/vets.entity';

@Injectable()
export class VetsService {
    constructor(
    @InjectRepository(Vet) private readonly vet:
    Repository<Vet>
    ) {}

    create(createVetDto: CreateVetDto){
      const vet = this.vet.create(createVetDto)
      return this.vet.save(vet)
    }
  
    findAll() {
      return this.vet.find({ 
        relations: { specialtie: true}
      })
  }


    async update(id: number, vetData: UpdateVetDto) {
      return this.vet.update({ id }, vetData)
    }

    remove(id: number){
      return this.vet.delete({ id })
    }

    findOne(id: number) {
      return this.vet.find({ 
        relations: { specialtie: true },
        where: { id }
      })
    }
}

