import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/entities/owner.entity';
import { Repository } from 'typeorm';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private readonly owner : Repository<Owner>
  ) {}

  create(createOwnerDto: CreateOwnerDto){
    const owner = this.owner.create(createOwnerDto)
    return this.owner.save(owner)
  }

          findAll() {
        return this.owner.find()
    }


      async update(id: number, userData: UpdateOwnerDto) {
        return this.owner.update({ id }, userData)
      }

      remove(id: number){
        return this.owner.delete({ id })
      }

      findOne(id: number) {
        return this.owner.find({ where: { id }})
      }
}
