/* eslint-disable prettier/prettier */
import { Controller, Get,Post,Delete,Body,Param } from '@nestjs/common';
import { PostService } from './post.service';
import { IPost } from 'interfaces/IPost';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  findAll(){
    return this.postService.findAll();
  }

  @Post()
  create(@Body() post:IPost){
    return this.postService.create(post);
  }

  @Get(':id')
  findOne(@Param('id') id:string){
    return this.postService.findOne(id)
  }

  @Delete(':id')
  delete(@Param('id') id:string){
    return this.postService.delete(id)
  }
}
