/* eslint-disable prettier/prettier */
import { Upload } from 'src/upload/upload.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  create_at: Date;

  @OneToMany(() => Upload, (upload) => upload.post, {
    cascade: true
  })
  upload: Upload[];
}
