/* eslint-disable prettier/prettier */
import { Injectable, Post,Get, Param } from '@nestjs/common';
import { Upload } from './upload.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IUpload } from 'interfaces/IUpload';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(Upload) private uploadRepository: Repository<Upload>,
  ) {}
  @Post()
  create(upload: IUpload) {
    const newUpload = this.uploadRepository.create(upload);
    return this.uploadRepository.save(newUpload);
  }

  @Get()
  getAllImages(){
    return this.uploadRepository.find()
  }

  @Get(':id')
  getOneImage(@Param('id') id: string){
   return this.uploadRepository.findOneBy({id})
  }
}
