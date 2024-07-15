import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: 'Create a new cart' })
  @ApiBody({ type: CreateCartDto })
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.createCart(createCartDto);
  }

  @ApiOperation({ summary: 'Find cart by user ID' })
  @ApiParam({ name: 'user_id', type: String })
  @Get('user/:user_id')
  findByUserId(@Param('user_id') user_id: string) {
    return this.cartService.getCartByUserId(+user_id);
  }
}
