import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength, Min, Max } from 'class-validator';

export class UpdateReviewDto {
  @ApiProperty({ example: 5, description: 'Updated rating given by the user, between 1 and 5' })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({ example: 'Great product!', description: 'Updated comment written by the user' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  comment?: string;
}
