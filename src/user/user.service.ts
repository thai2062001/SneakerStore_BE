import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
        role_id: data.role_id,
      },
    });
  }

  async updateUser(user_id: number, data: UpdateUserDto) {
    const updateData: any = {
      username: data.username,
      email: data.email,
      role_id: data.role_id,
    };

    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: { user_id },
      data: updateData,
    });
  }

  async deleteUser(user_id: number) {
    return this.prisma.user.delete({
      where: { user_id },
    });
  }

  async getUser(user_id: number) {
    return this.prisma.user.findUnique({
      where: { user_id },
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
