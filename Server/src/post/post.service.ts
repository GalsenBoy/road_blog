/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IPost } from 'interfaces/IPost';
import { Upload } from 'src/upload/upload.entity';
// import { Response } from 'express';
// import { join } from 'path';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) { }

  async findAll() {
    return this.postRepository.find();
  }

  async create(post: IPost, uploads: Upload[]) {
    const newPost = this.postRepository.create(post);
    newPost.upload = uploads;
    const savedPost = await this.postRepository.save(newPost, { reload: true });
    console.log('Saved Post:', savedPost);
    return savedPost;
  }


  async findAllWithImages() {
    return this.postRepository.find({ relations: ['upload'] });
  }

  async findOneWithImages(id: string) {
    return this.postRepository.findOne({ 
      where: { id }, 
      relations: ['upload']
    });
  }
  
  

  async findOne(id: string) {
    return this.postRepository.findOneBy({ id });
  }

  

  async update(id: string, updatePost: IPost) {
    const post = await this.findOne(id);
    return this.postRepository.save({ ...post, ...updatePost });
  }

  async delete(id: string) {
    const post = await this.findOne(id);
    return this.postRepository.remove(post);
  }
}
