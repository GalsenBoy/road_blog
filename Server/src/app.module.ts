/* eslint-disable prettier/prettier */

import { dataSourceOptions } from '../db/data.source';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      dataSourceOptions,
      // synchronize: true,
    ),
    UsersModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
