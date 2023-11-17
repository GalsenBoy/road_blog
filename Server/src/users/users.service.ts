import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser } from 'interfaces/IUser';
import { User } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    // if (role) {
    //   return this.users.filter((user) => user.role === role);
    // }
    return this.userRepository.find();
  }
  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }
  async update(id: number, updateUser: IUser) {
    const user = await this.findOne(id);
    return this.userRepository.save({ ...user, ...updateUser });
  }

  create(user: IUser) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
  async delete(id: number) {
    const userId = await this.findOne(id);
    return this.userRepository.remove(userId);
  }
}
