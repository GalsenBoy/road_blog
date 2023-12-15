/* eslint-disable prettier/prettier */
import { Upload } from 'src/upload/upload.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  create_at: Date;

  @Column()
  file: string

  @OneToMany(() => Upload, (upload) => upload.post, {
    cascade: true
  })
  upload: Upload[];
}
