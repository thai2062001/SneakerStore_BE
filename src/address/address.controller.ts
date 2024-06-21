import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiBody } from '@nestjs/swagger';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create address' })
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 201, description: 'The address has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all addresses' })
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 200, description: 'Return all addresses.' })
  findAll() {
    return this.addressService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get address by ID' })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'id', description: 'Address ID to retrieve', type: Number })
  @ApiResponse({ status: 200, description: 'Return the address.' })
  @ApiResponse({ status: 404, description: 'Address not found.' })
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update address' })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'id', description: 'Address ID to update', type: Number })
  @ApiResponse({ status: 200, description: 'The address has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Address not found.' })
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(+id, updateAddressDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete address' })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'id', description: 'Address ID to delete', type: Number })
  @ApiResponse({ status: 200, description: 'The address has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Address not found.' })
  remove(@Param('id') id: string) {
    return this.addressService.remove(+id);
  }
}
