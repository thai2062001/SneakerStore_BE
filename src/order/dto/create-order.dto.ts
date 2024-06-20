import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    description: 'User ID associated with the order',
    example: 1,
  })
  user_id: number;

  @ApiProperty({
    description: 'Status of the order',
    example: 'pending',
  })
  status: string;

  @ApiProperty({
    description: 'Total amount of the order',
    example: 99.99,
  })
  totalAmount: number;

  @ApiProperty({
    description: 'Creation date and time of the order',
    example: '2024-06-17T10:00:00Z',
  })
  createdAt: Date;
}
