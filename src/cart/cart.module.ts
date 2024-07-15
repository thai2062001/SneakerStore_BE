import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SwaggerModule } from '@nestjs/swagger';
@Module({
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
