import { Module } from '@nestjs/common';
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

@Module({
  imports: [ RoleModule, UserModule, BrandModule, CategoryModule, ProductModule, OrderModule, OrderItemModule, ReviewModule, AddressModule, FavoriteModule, StockModule, InvoiceModule],
  providers:[PrismaService],
})
export class AppModule {}
