import {IsNotEmpty, IsString, IsNumber, IsPositive, IsUrl, ValidateNested  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateStockDto } from 'src/stock/dto/create-stock.dto';
import { Type } from 'class-transformer';
import { CreateProductImageDto } from 'src/product-image/dto/create-product-image.dto';
export class CreateProductDto {
  @ApiProperty({ example: 'Running Shoes', description: 'The name of the product.' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'A comfortable pair of shoes for running.', description: 'Description of the product.' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 99.99, description: 'The price of the product.' })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ example: 'https://example.com/image.jpg', description: 'URL of the product image.' })
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  image_url: string;

  @ApiProperty({ example: 2, description: 'ID of the brand to which the product belongs.' })
  @IsNotEmpty()
  @IsNumber()
  brand_id: number;

  @ApiProperty({ example: "Male", description: 'Male or Female.' })
  @IsNotEmpty()
  @IsString()
  gender: string;

  @ApiProperty({ example: 1, description: 'Array of category IDs to which the product belongs.' })
  @IsNotEmpty()
  @IsNumber()
  category_id: number;
  @ApiProperty({ example: 1, description: 'Array of category IDs to which the product belongs.' })
  @IsNotEmpty()

  @ApiProperty({ type: [CreateStockDto], description: 'Array of stock details for the product.' })
  @ValidateNested({ each: true })
  @Type(() => CreateStockDto)
  @IsNotEmpty()
  stocks: CreateStockDto[];

  @ApiProperty({ type: [CreateProductImageDto], description: 'Array of additional product images.' })
  @ValidateNested({ each: true })
  @Type(() => CreateProductImageDto)
  @IsNotEmpty()
  productImages: CreateProductImageDto[];
}
