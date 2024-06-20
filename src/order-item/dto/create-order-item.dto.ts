import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateOrderItemDto {
  @ApiProperty({ example: 1, description: 'ID of the order related to this item' })
  @IsInt()
  @IsNotEmpty()
  orderId: number;

  @ApiProperty({ example: 1, description: 'ID of the product related to this item' })
  @IsInt()
  @IsNotEmpty()
  productId: number;

  @ApiProperty({ example: 2, description: 'Quantity of the product in this order item' })
  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({ example: 10.5, description: 'Price of one unit of the product' })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 'M', description: 'Size of the product (optional)' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  size?: string;

  @ApiProperty({ example: 'Red', description: 'Color of the product (optional)' })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  color?: string;
}
