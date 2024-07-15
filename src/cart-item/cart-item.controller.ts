import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('cart-items')
@Controller('cart-items')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @ApiOperation({ summary: 'Create a new cart item' })
  @ApiBody({ type: CreateCartItemDto })
  @Post()
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemService.createCartItem(createCartItemDto);
  }

  @ApiOperation({ summary: 'Get cart item by ID' })
  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartItemService.getCartItem(+id);
  }

  @ApiOperation({ summary: 'Update a cart item' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateCartItemDto })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemService.updateCartItem(+id, updateCartItemDto);
  }

  @ApiOperation({ summary: 'Delete a cart item' })
  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartItemService.deleteCartItem(+id);
  }
  @Delete(':cartItemId')
  async deleteCartItem(@Param('cartItemId') cartItemId: string) {
    const cartItem_id = parseInt(cartItemId, 10);
    return this.cartItemService.deleteCartItem(cartItem_id);
  }

  @ApiOperation({ summary: 'Get cart items by cart ID' })
  @ApiParam({ name: 'cart_id', type: Number })
  @Get('cart/:cart_id')
  findByCartId(@Param('cart_id') cart_id: number) {
    return this.cartItemService.getCartItemsByCartId(cart_id);
  }
}
