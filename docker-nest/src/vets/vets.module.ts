import { Module } from '@nestjs/common';
import { VetsService } from './vets.service';
import { VetsController } from './vets.controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vet } from 'src/entities/vets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vet])],
  controllers: [VetsController],
  providers: [VetsService]
})
export class VetsModule {}
