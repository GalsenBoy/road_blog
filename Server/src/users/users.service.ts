import { Injectable } from '@nestjs/common';
import { IUser } from 'interfaces/IUser';

@Injectable()
export class UsersService {
  private users: IUser[] = [
    {
      id: 1,
      name: 'bob',
      email: 'bob@gmail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'alex',
      email: 'alex@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'apo',
      email: 'apo@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'yve',
      email: 'yve@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 5,
      name: 'amy',
      email: 'amy@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 6,
      name: 'clo',
      email: 'clo@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 7,
      name: 'tel',
      email: 'tel@gmail.com',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    if (id) {
      return this.users.filter((user) => user.id === id);
    }
  }

  create(user: IUser) {
    const highestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: highestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
  delete(id: number) {
    if (id) {
      return this.users.filter((user) => user.id !== id);
    }
  }
}
