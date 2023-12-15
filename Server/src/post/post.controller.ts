/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Delete, Body, Param, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { IPost } from 'interfaces/IPost';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) { }
  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    dest: 'uploads'
  }))
  async create(@Body() post: IPost, @UploadedFile() file: Express.Multer.File) {
    try {
      if (file && file.buffer) {
        console.log('File Content:', file.buffer);
        post.file = file.buffer.toString('base64');
      }
      return this.postService.create(post);
    } catch (error) {
      console.log(error);
    }
  }


  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.postService.findOne(id)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.postService.delete(id)
  }
}
