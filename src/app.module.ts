import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TuitsPModule } from './tuits-p/tuits-p.module';
import { TuitsModule } from './modules/tuits/tuits.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tuit } from './modules/tuits/tuit.entity';


@Module({
  imports: [TuitsPModule, TuitsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Shoganai@23',
      database: 'prueba',
      entities: [Tuit],
      synchronize: true, // Sincronizar las entidades con la base de datos (solo para desarrollo)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
