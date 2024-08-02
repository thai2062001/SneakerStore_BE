import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private notificationService: NotificationService // Tiêm NotificationService
  ) {}

  async createUser(data: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Start a transaction
    return this.prisma.$transaction(async (prisma) => {
      // First, create the user
      const user = await prisma.user.create({
        data: {
          username: data.username,
          email: data.email,
          password: hashedPassword,
          role_id: data.role_id,
          phone_number: data.phone_number,
          gender: data.gender,
        },
      });

      // Then, create the cart for the newly created user
      await prisma.cart.create({
        data: {
          user_id: user.user_id,
          // createAt will be handled automatically by Prisma
        },
      });

      // Return the created user
      return user;
    });
  }

  async updateUser(user_id: number, data: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { user_id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${user_id} not found`);
    }

    const updateData: any = {
      username: data.username,
      email: data.email,
      role_id: data.role_id,
      phone_number: data.phone_number,
      gender: data.gender,
    };

    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);

      // Gửi thông báo cho người dùng khi mật khẩu được cập nhật
      await this.notificationService.create({
        user_id,
        type: 'password_change',
        message: `Your password has been successfully updated.`,
        isRead: false, // Mặc định là chưa đọc
        createdAt: new Date(),
      });
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
