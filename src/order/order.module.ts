import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { NotificationModule } from 'src/notification/notification.module';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  imports:[NotificationModule],
  controllers: [OrderController],
  providers: [OrderService,PrismaService],
  exports: [OrderService],
})
export class OrderModule {}
