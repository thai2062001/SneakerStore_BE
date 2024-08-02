import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

import { NotificationService } from './../notification/notification.service';

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    private notificationService: NotificationService // Tiêm NotificationService
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const { user_id, status, totalAmount, createdAt, orderItems,isCanceled,canceledAt } = createOrderDto;

    console.log(createOrderDto, 'data');
    const newOrder = await this.prisma.$transaction(async (prisma) => {
      // Kiểm tra giỏ hàng
      const cart = await prisma.cart.findUnique({
        where: { user_id },
        include: { cartItems: true },
      });

      if (!cart || cart.cartItems.length === 0) {
        throw new BadRequestException('Cart is empty');
      }

      // Tạo đơn hàng mới
      const totalAmountNumber = Number(totalAmount); // Chuyển đổi chuỗi "250.00" thành số 250.00
      console.log(typeof totalAmountNumber);

      const order = await prisma.order.create({
        data: {
          user_id,
          status,
          isCanceled:true,
          canceledAt:null,
          totalAmount: totalAmountNumber, // Sử dụng số đã chuyển đổi
          createdAt: new Date(createdAt),
        },
      });
      console.log(order);

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
      console.log(orderItemsData);

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
        console.log(stock);
      }

      // Tạo invoice cho đơn hàng
      const invoice = await prisma.invoice.create({
        data: {
          order_id: order.order_id,
          date: new Date(), // Ngày tạo invoice là hiện tại
          amount: totalAmountNumber,
        },
      });
      console.log(invoice);

      // Xoá các mục trong giỏ hàng sau khi tạo đơn hàng
      await prisma.cartItem.deleteMany({
        where: { cart_id: cart.cart_id },
      });

      // Gửi thông báo cho người dùng
      await this.notificationService.create({
        user_id,
        type: 'order_success',
        message: `Your order with ID ${order.order_id} has been successfully created.`,
        isRead: false, // Mặc định là chưa đọc
        createdAt: new Date(),
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

  async cancelOrder(order_id: number) {
    const order = await this.prisma.order.findUnique({
      where: { order_id },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${order_id} not found`);
    }

    if (order.isCanceled) {
      throw new BadRequestException('Order has already been canceled');
    }

    return this.prisma.order.update({
      where: { order_id },
      data: {
        isCanceled: true,
        canceledAt: new Date(),
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
        orderItems: {
          include: {
            product: true,
          },
        },
        invoice: true,
      },
    });
  }
}
