// src/cart/cart.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async createCart(data: CreateCartDto) {
    const { user_id } = data;

    return this.prisma.cart.create({
      data: {
        user_id,
      },
    });
  }

  async getCartByUserId(user_id: number) {
    const cart = await this.prisma.cart.findFirst({
      where: { user_id },
      include: { cartItems: true },
    });

    if (!cart) {
      throw new NotFoundException(`Cart for User ID ${user_id} not found`);
    }

    return cart;
  }
}
