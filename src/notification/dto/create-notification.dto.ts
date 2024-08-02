// create-notification.dto.ts
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  @IsString()
  user_id: number;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  createdAt: Date;

  @IsBoolean()
  isRead: boolean;
}
