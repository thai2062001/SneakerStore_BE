import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const { user_id, status, totalAmount, createdAt } = createOrderDto;
    return this.prisma.order.create({
      data: {
        user_id:createOrderDto.user_id,
        status:createOrderDto.status,
        totalAmount:createOrderDto.totalAmount,
        createdAt:createOrderDto.createdAt,
      },
    });
  }

  async updateOrder(order_id: number, updateOrderDto: UpdateOrderDto) {
    const { status, totalAmount } = updateOrderDto;
    return this.prisma.order.update({
      where: { order_id },
      data: {
        status,
        totalAmount,
      },
    });
  }

  async deleteOrder(order_id: number) {
    return this.prisma.order.delete({
      where: { order_id },
    });
  }

  async getOrder(order_id: number) {
    const order = await this.prisma.order.findUnique({
      where: { order_id },
      include: {
        user: true,
        orderItems: true,
        invoice: true,
      },
    });
    if (!order) {
      throw new NotFoundException(`Order with ID ${order_id} not found`);
    }
    return order;
  }

  async getAllOrders() {
    return this.prisma.order.findMany({
      include: {
        user: true,
        orderItems: true,
        invoice: true,
      },
    });
  }
}
