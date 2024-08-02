import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Injectable()
export class CartItemService {
  constructor(private prisma: PrismaService) {}

  async createCartItem(data: CreateCartItemDto) {
    const { cart_id, product_id, quantity, color, size } = data;

    // Kiểm tra xem cart có tồn tại hay không
    const cart = await this.prisma.cart.findUnique({
      where: { cart_id },
    });

    if (!cart) {
      throw new NotFoundException(`Cart with ID ${cart_id} not found`);
    }

    // Tạo cart item mới
    const createdCartItem = await this.prisma.cartItem.create({
      data: {
        cart_id,
        product_id,
        quantity,
        color,
        size,
      },
    });

    return createdCartItem;
  }

  async updateCartItem(cartItem_id: number, data: UpdateCartItemDto) {
    const { quantity } = data;

    return this.prisma.cartItem.update({
      where: { cartItem_id },
      data: { quantity },
    });
  }

  async deleteCartItem(cartItem_id: number) {
    return this.prisma.cartItem.delete({
      where: { cartItem_id },
    });
  }

  async getCartItem(cartItem_id: number) {
    const cartItem = await this.prisma.cartItem.findUnique({
      where: { cartItem_id },
    });

    if (!cartItem) {
      throw new NotFoundException(`CartItem with ID ${cartItem_id} not found`);
    }

    return cartItem;
  }

  async getCartItemsByCartId(cart_id: number) {
    return this.prisma.cartItem.findMany({
      where: {
        cart_id: Number(cart_id),
      },
      include: {
        product: {
          include: {
            images: true  
          }
        }
      },
    });
  }
}
