import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const { user_id, status, totalAmount, createdAt, orderItems } = createOrderDto;

    const newOrder = await this.prisma.$transaction(async (prisma) => {
      // Tạo đơn hàng mới
      const order = await prisma.order.create({
        data: {
          user_id,
          status,
          totalAmount,
          createdAt: new Date(createdAt),
        },
      });

      // Tạo các mục đơn hàng
      const orderItemsData = orderItems.map((item) => ({
        orderId: order.order_id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        size: item.size,
        color: item.color,
      }));

      await prisma.orderItem.createMany({
        data: orderItemsData,
      });

      // Giảm số lượng sản phẩm trong kho
      for (const item of orderItems) {
        const stock = await prisma.stock.findFirst({
          where: {
            product_id: item.productId,
            size: item.size,
            color: item.color,
          },
        });

        if (!stock) {
          throw new BadRequestException(
            `Product with ID ${item.productId} and size ${item.size} and color ${item.color} not found in stock`
          );
        }

        if (stock.quantity < item.quantity) {
          throw new BadRequestException(
            `Not enough stock for product with ID ${item.productId}, size ${item.size}, and color ${item.color}`
          );
        }

        await prisma.stock.update({
          where: { stock_id: stock.stock_id },
          data: { quantity: stock.quantity - item.quantity },
        });
      }

      // Tạo invoice cho đơn hàng
      const invoice = await prisma.invoice.create({
        data: {
          order_id: order.order_id,
          date: new Date(), // Ngày tạo invoice là hiện tại
          amount: totalAmount,
        },
      });

      return { order, invoice };
    });

    return newOrder;
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
