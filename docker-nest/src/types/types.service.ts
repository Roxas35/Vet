import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from 'src/entities/type.entity'

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type) private readonly type : Repository<Type>
  ) {}

  create(createTypeDto: CreateTypeDto){
    const type = this.type.create(createTypeDto)
    return this.type.save(type)
  }

          findAll() {
        return this.type.find()
    }


      async update(id: number, userData: UpdateTypeDto) {
        return this.type.update({ id }, userData)
      }

      remove(id: number){
        return this.type.delete({ id })
      }

      findOne(id: number) {
        return this.type.find({ where: { id }})
      }
}

