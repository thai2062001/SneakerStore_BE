import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateInvoiceDto {
  @ApiProperty({ example: 1, description: 'Order ID' })
  @IsInt()
  @IsNotEmpty()
  order_id: number;

  @ApiProperty({ example: '2024-06-19T10:30:00Z', description: 'Date of the invoice' })
  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @ApiProperty({ example: 150.5, description: 'Total amount of the invoice' })
  @IsNotEmpty()
  amount: number;
}
