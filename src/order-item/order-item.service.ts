import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Injectable()
export class OrderItemService {
  constructor(private prisma: PrismaService) {}

  async createOrderItem(createOrderItemDto: CreateOrderItemDto) {
    const { orderId, productId, quantity, price, size, color } = createOrderItemDto;
    return this.prisma.orderItem.create({
      data: {
        orderId:createOrderItemDto.orderId,
        productId:createOrderItemDto.productId,
        quantity:createOrderItemDto.quantity,
        price:createOrderItemDto.price,
        size:createOrderItemDto.size,
        color:createOrderItemDto.color,
      },
    });
  }

  async updateOrderItem(orderItemId: number, updateOrderItemDto: UpdateOrderItemDto) {
    const { quantity, price, size, color } = updateOrderItemDto;
    return this.prisma.orderItem.update({
      where: { orderItem_id: orderItemId },
      data: {
        quantity,
        price,
        size,
        color,
      },
    });
  }

  async deleteOrderItem(orderItemId: number) {
    return this.prisma.orderItem.delete({
      where: { orderItem_id: orderItemId },
    });
  }

  async getOrderItem(orderItemId: number) {
    const orderItem = await this.prisma.orderItem.findUnique({
      where: { orderItem_id: orderItemId },
      include: {
        order: true,
        product: true,
      },
    });
    if (!orderItem) {
      throw new NotFoundException(`OrderItem with ID ${orderItemId} not found`);
    }
    return orderItem;
  }

  async getAllOrderItems() {
    return this.prisma.orderItem.findMany({
      include: {
        order: true,
        product: true,
      },
    });
  }
}
