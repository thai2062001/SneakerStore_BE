import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CreateOrderDto })
  @ApiResponse({ 
    status: 201, 
    description: 'The order has been successfully created.',
    type: CreateOrderDto,
  })
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing order by ID' })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'id', description: 'Order ID to update', type: Number })
  @ApiBody({ type: UpdateOrderDto })
  @ApiResponse({ status: 200, description: 'The order has been successfully updated.' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.updateOrder(id, updateOrderDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order by ID' })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'id', description: 'Order ID to delete', type: Number })
  @ApiResponse({ status: 200, description: 'The order has been successfully deleted.' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.deleteOrder(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Retrieve an order by ID' })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'id', description: 'Order ID to retrieve', type: Number })
  @ApiResponse({ status: 200, description: 'The order has been successfully retrieved.' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.getOrder(id);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all orders' })
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 200, description: 'All orders have been successfully retrieved.' })
  async findAll() {
    return this.orderService.getAllOrders();
  }
}
