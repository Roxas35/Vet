import { Injectable } from '@nestjs/common';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visit } from 'src/entities/visits.entitiy';

@Injectable()
export class VisitsService {
    constructor(
    @InjectRepository(Visit) private readonly visit:
    Repository<Visit>
    ) {}

    create(createVisitDto: CreateVisitDto){
      const visit = this.visit.create(createVisitDto)
      return this.visit.save(visit)
    }
  
    findAll() {
      return this.visit.find()
  }


    async update(id: number, visitData: UpdateVisitDto) {
      return this.visit.update({ id }, visitData)
    }

    remove(id: number){
      return this.visit.delete({ id })
    }

    findOne(id: number) {
      return this.visit.find({
         relations: { pet: true },
        where: { id }
      })
    }
}

