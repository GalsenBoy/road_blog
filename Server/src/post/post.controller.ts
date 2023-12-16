/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Delete, Body, Param, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { IPost } from 'interfaces/IPost';
import { FileInterceptor } from '@nestjs/platform-express';
import { Upload } from 'src/upload/upload.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) { }
  @Get()
  async findAll() {
    return this.postService.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    dest: 'uploads'
  }))
  async create(@Body() post: IPost, @UploadedFile() file: Express.Multer.File) {
    try {
      let uploads: Upload[] = [];
      if (file) {
        const upload = new Upload();
        upload.fieldname = file.fieldname;
        upload.originalname = file.originalname;
        upload.mimetype = file.mimetype;
        uploads = [upload];
      }

      return this.postService.create(post, uploads);
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
