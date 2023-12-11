/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
