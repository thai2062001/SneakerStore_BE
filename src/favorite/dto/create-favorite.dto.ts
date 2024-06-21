import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateFavoriteDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  @IsInt()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty({ example: 1, description: 'Array of Product IDs' })
  @IsNotEmpty({ each: true })
  @IsInt({ each: true })
  product_ids: number[];
}
