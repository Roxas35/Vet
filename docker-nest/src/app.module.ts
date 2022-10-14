import { Module } from '@nestjs/common';
import { OwnersModule } from './owners/owners.module';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { TypesModule } from './types/types.module';
import { VisitsModule } from './visits/visits.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import { VetsModule } from './vets/vets.module';
import { SpecialtiesModule } from './specialties/specialtie.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory:(configService: ConfigService) => ({
        type:'postgres',
        host: configService.get('DB_HOST'),
        port: <number>configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true
      }),
      inject: [ConfigService]
    }),
      OwnersModule,
      UsersModule,
      PetsModule,
      TypesModule,
      VisitsModule,
      VetsModule,
      SpecialtiesModule,
    ],
  controllers: [],
  providers: [],
})

export class AppModule {}
