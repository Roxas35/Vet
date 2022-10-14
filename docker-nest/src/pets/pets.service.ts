import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from 'src/entities/pet.entity';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly pet : Repository<Pet>
  ) {}

  create(createPetDto: CreatePetDto){
    const pet = this.pet.create(createPetDto)
    return this.pet.save(pet)
  }

          findAll() {
        return this.pet.find({
          relations: { type: true }
        })
    }


      async update(id: number, userData: UpdatePetDto) {
        return this.pet.update({ id }, userData)
      }

      remove(id: number){
        return this.pet.delete({ id })
      }

      findOne(id: number) {
        return this.pet.find({ 
          relations: { type: true, visit: true, owner: true },
          where: { id }})
      }
}
