import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAddressDto } from './create-address.dto';
import { IsString, IsOptional, IsInt } from 'class-validator';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {
  @ApiProperty({ example: 1, description: 'User ID', required: false })
  @IsInt()
  @IsOptional()
  user_id?: number;

  @ApiProperty({ example: '123 Main St', description: 'Street address', required: false })
  @IsString()
  @IsOptional()
  street?: string;

  @ApiProperty({ example: 'New York', description: 'City', required: false })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty({ example: 'USA', description: 'Country', required: false })
  @IsString()
  @IsOptional()
  country?: string;
}
