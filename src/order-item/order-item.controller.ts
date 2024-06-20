import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBody } from '@nestjs/swagger';
import { OrderItemService } from './order-item.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@ApiTags('Order Items')
@Controller('order-items')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order item' })
  @ApiBody({ type: CreateOrderItemDto })
  @ApiResponse({
    status: 201,
    description: 'The order item has been successfully created.',
    type: CreateOrderItemDto,
  })
  async create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemService.createOrderItem(createOrderItemDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing order item by ID' })
  @ApiParam({ name: 'id', description: 'Order Item ID to update', type: Number })
  @ApiBody({ type: UpdateOrderItemDto })
  @ApiResponse({ status: 200, description: 'The order item has been successfully updated.' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemService.updateOrderItem(id, updateOrderItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order item by ID' })
  @ApiParam({ name: 'id', description: 'Order Item ID to delete', type: Number })
  @ApiResponse({ status: 200, description: 'The order item has been successfully deleted.' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.orderItemService.deleteOrderItem(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve an order item by ID' })
  @ApiParam({ name: 'id', description: 'Order Item ID to retrieve', type: Number })
  @ApiResponse({ status: 200, description: 'The order item has been successfully retrieved.' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.orderItemService.getOrderItem(id);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all order items' })
  @ApiResponse({ status: 200, description: 'All order items have been successfully retrieved.' })
  async findAll() {
    return this.orderItemService.getAllOrderItems();
  }
}
