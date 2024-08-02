// src/app.module.ts
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { ReviewModule } from './review/review.module';
import { AddressModule } from './address/address.module';
import { FavoriteModule } from './favorite/favorite.module';
import { StockModule } from './stock/stock.module';
import { InvoiceModule } from './invoice/invoice.module';
import { AuthModule } from './auth/auth.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ProductImageModule } from './product-image/product-image.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { CartModule } from './cart/cart.module';
import { NotificationModule } from './notification/notification.module';

import * as cors from 'cors';
@Module({
  imports: [
    RoleModule,
    UserModule,
    BrandModule,
    CategoryModule,
    ProductModule,
    OrderModule,
    OrderItemModule,
    ReviewModule,
    AddressModule,
    FavoriteModule,
    StockModule,
    InvoiceModule,
    AuthModule,
    ProductImageModule,
    CartItemModule,
    CartModule,
    NotificationModule,
    
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}
