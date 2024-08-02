import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createNotificationDto: CreateNotificationDto) {
    return this.prisma.notification.create({
      data: {
        ...createNotificationDto,
        isRead: false, // Mặc định đặt isRead là false khi tạo mới
      },
    });
  }

  async findAll() {
    return this.prisma.notification.findMany({
      where: {
        isRead: false,
      },
    });
  }
  async findOne(notification_id: number) {
    const notification = await this.prisma.notification.findUnique({
      where: { notification_id },
    });
    if (!notification) {
      throw new NotFoundException(`Notification with ID ${notification_id} not found`);
    }
    return notification;
  }

  async update(notification_id: number, updateNotificationDto: UpdateNotificationDto) {
    const notification = await this.prisma.notification.findUnique({
      where: { notification_id },
    });
    if (!notification) {
      throw new NotFoundException(`Notification with ID ${notification_id} not found`);
    }

    return this.prisma.notification.update({
      where: { notification_id },
      data: updateNotificationDto,
    });
  }

  async markAsRead(notification_id: number) {
    const notification = await this.prisma.notification.findUnique({
      where: { notification_id },
    });
    if (!notification) {
      throw new NotFoundException(`Notification with ID ${notification_id} not found`);
    }

    return this.prisma.notification.update({
      where: { notification_id },
      data: { isRead: true },
    });
  }

  async remove(notification_id: number) {
    const notification = await this.prisma.notification.findUnique({
      where: { notification_id },
    });
    if (!notification) {
      throw new NotFoundException(`Notification with ID ${notification_id} not found`);
    }

    return this.prisma.notification.delete({
      where: { notification_id },
    });
  }
}
