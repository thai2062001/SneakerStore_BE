import { IsInt, IsString, IsNumber, IsArray, ValidateNested, IsDate } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class CreateOrderItemDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  productId: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  quantity: number;

  @ApiProperty({ example: 50.00 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 'M' })
  @IsString()
  size: string;

  @ApiProperty({ example: 'Red' })
  @IsString()
  color: string;
}

export class CreateOrderDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  user_id: number;

  @ApiProperty({ example: 'pending' })
  @IsString()
  status: string;

  @ApiProperty({ example: 150.00 })
  @IsNumber()
  totalAmount: number;

  @ApiProperty({ example: '2024-06-20T10:00:00Z' })
  @IsDate()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @ApiProperty({ type: [CreateOrderItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  orderItems: CreateOrderItemDto[];
}
