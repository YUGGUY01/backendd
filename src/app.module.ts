import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { StudentCotroller } from './student/student.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat, CatProfile } from './cat/catentities';
import { CatFood } from './cat/Catfood.entities';



@Module({
  imports: [ConfigModule.forRoot() ,
  TypeOrmModule.forRootAsync({
    imports : [ConfigModule],
    useFactory :(ConfigService : ConfigService) => {
      let option : TypeOrmModule = {
        type : "sqlite" ,
        database : ConfigService.get<string>("DATABASE_NAME",'database.db'),
        entities : [CatProfile ,CatFood,Cat],
        syncchronnize : true
      }
    return option;
    },
    inject:[ConfigService]
  }),
  TypeOrmModule.forFeature([Cat ,CatProfile , CatFood])

],
  controllers: [AppController , CatController , StudentCotroller],
  providers: [AppService , CatService],
})
export class AppModule {}


