import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min, Max } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({ example: 1, description: 'ID of the product being reviewed' })
  @IsInt()
  @IsNotEmpty()
  productId: number;

  @ApiProperty({ example: 1, description: 'ID of the user who is writing the review' })
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ example: 5, description: 'Rating given by the user, between 1 and 5' })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({ example: 'Great product!', description: 'Comment written by the user' })
  @IsString()
  @MaxLength(255)
  comment: string;
}
