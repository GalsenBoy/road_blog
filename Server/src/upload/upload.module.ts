/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { Upload } from './upload.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UploadController],
  imports: [TypeOrmModule.forFeature([Upload])],
})
export class UploadModule { }
