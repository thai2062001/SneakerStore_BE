// src/cart/dto/create-cart-item.dto.ts

export class CreateCartItemDto {
  cart_id: number;
  product_id: number;
  quantity: number;
  color: string; // Thêm trường color
  size: string;  // Thêm trường size
}
