import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { Cat } from './cats/entities/cat.entity';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'nest_api',
    password: 'nest_api',
    database: 'cats_db',
    entities: [Cat],
    synchronize: true
  }),
  CatsModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
