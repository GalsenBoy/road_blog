/* eslint-disable prettier/prettier */
import { Controller, Get,Post,Delete } from '@nestjs/common';
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
  create(post:IPost){
    return this.postService.create(post);
  }

  @Get()
  findOne(id:number){
    return this.postService.findOne(id)
  }

  @Delete()
  delete(id:number){
    return this.postService.delete(id)
  }
}
