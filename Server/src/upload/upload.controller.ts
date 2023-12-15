/* eslint-disable prettier/prettier */
import { FileInterceptor } from '@nestjs/platform-express';
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Get,
  Param
} from '@nestjs/common';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }
  @UseInterceptors(FileInterceptor('file', {
    dest: 'uploads'
  }))
  @Post()
  uploadFile(@Body() body: string, @UploadedFile() file: Express.Multer.File) {
    return this.uploadService.create(file)
  }

  @Get()
  getAllImages() {
    return this.uploadService.getAllImages()
  }

  @Get(':id')
  getOneImage(@Param('id') id: string) {
    return this.uploadService.getOneImage(id)
  }

}
