import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationController } from './notification.controller';
import { PrismaModule } from '../prisma/prisma.module';
@Module({
  
  imports: [PrismaModule],
  controllers: [NotificationController],
  providers: [NotificationService,PrismaService],
  exports: [NotificationService],
})
export class NotificationModule {}
