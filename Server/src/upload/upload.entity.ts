/* eslint-disable prettier/prettier */
import { Post } from 'src/post/post.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Upload {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  fieldname: string;
  @Column()
  originalname: string;
  @Column()
  mimetype: string;

  @ManyToOne(() => Post, (post) => post.upload)
  post: Post;
}
