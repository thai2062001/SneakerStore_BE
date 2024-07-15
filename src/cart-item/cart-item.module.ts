import { Module } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CartItemController } from './cart-item.controller';
import { SwaggerModule } from '@nestjs/swagger';
@Module({
  controllers: [CartItemController],
  providers: [CartItemService],
})
export class CartItemModule {}
