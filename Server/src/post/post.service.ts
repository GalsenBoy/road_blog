/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IPost } from 'interfaces/IPost';
import { Upload } from 'src/upload/upload.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) { }

  findAll() {
    return this.postRepository.find();
  }

  async create(post: IPost, uploads: Upload[]) {
    const newPost = this.postRepository.create(post);
    newPost.upload = uploads; // Assurez-vous que la relation est correctement établie
    const savedPost = await this.postRepository.save(newPost, { reload: true });
    console.log('Saved Post:', savedPost);
    return savedPost;
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
