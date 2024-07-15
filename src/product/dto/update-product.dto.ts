import { UpdateStockDto } from 'src/stock/dto/update-stock.dto';
import { UpdateProductImageDto } from 'src/product-image/dto/update-product-image.dto';
export class UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  image_url?: string;
  brand_id?: number;
  category_id?: number;
  stocks?: UpdateStockDto[];
  productImages?: UpdateProductImageDto[]; 
}
