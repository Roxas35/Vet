import { Module } from '@nestjs/common';
import { SpecialtiesService } from './specialtie.service';
import { SpecialtiesController } from './specialtie.controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialtie } from 'src/entities/specialties.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Specialtie])],
  controllers: [SpecialtiesController],
  providers: [SpecialtiesService]
})
export class SpecialtiesModule {}
