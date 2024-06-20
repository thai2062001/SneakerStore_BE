import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Shoes', description: 'The name of the category.' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
