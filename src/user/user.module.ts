import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationModule } from 'src/notification/notification.module';
@Module({
  imports: [PrismaModule,NotificationModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
