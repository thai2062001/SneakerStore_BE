import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { password: _, ...result } = user;
    return result;
  }

  async login(user: any) {
    // Fetch the cart_id based on user_id
    const cart = await this.prisma.cart.findUnique({ 
      where: { user_id: user.user_id } 
    });

    if (!cart) {
      throw new UnauthorizedException('Cart not found');
    }

    const payload = {
      sub: user.user_id, // subject of the token (typically user_id)
      email: user.email,
      username: user.username,
      phone_number: user.phone_number,
      user_id: user.user_id, // include user_id in the payload
      cart_id: cart.cart_id // include cart_id in the payload
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
