import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateStockDto {
  @ApiProperty({ example: 1, description: 'Product ID' })
  @IsInt()
  @IsNotEmpty()
  product_id: number;

  @ApiProperty({ example: 'M', description: 'Size of the stock' })
  @IsString()
  @IsNotEmpty()
  size: string;

  @ApiProperty({ example: 'Red', description: 'Color of the stock' })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({ example: 10, description: 'Quantity of the stock' })
  @IsInt()
  @IsNotEmpty()
  quantity: number;
}
