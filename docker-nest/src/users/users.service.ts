import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
    @InjectRepository(User) private readonly user :
    Repository<User>
    ) {}

    create(createUserDto: CreateUserDto){
      const user = this.user.create(createUserDto)
      return this.user.save(user)
    }
  
    findAll() {
      return '404'
  }


    async update(id: number, userData: UpdateUserDto) {
      return this.user.update({ id }, userData)
    }

    remove(id: number){
      return this.user.delete({ id })
    }

    findOne(id: number) {
      return this.user.find({ 
        relations: { owner: true },
        where: { id }
      })
    }
}

