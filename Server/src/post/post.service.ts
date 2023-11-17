/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IPost } from 'interfaces/IPost';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  findAll() {
    return this.postRepository.find();
  }

  create(post: IPost) {
    const newPost = this.postRepository.create(post);
    return this.postRepository.save(newPost);
  }

  findOne(id: string) {
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
