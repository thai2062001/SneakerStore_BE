import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException ,Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(@Query() query: any) {
    return await this.productService.getFilteredProducts(query);
  }


  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiBody({ type: CreateProductDto })
  @ApiResponse({ status: 201, description: 'The product has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      const product = await this.productService.createProduct(createProductDto);
      return { statusCode: HttpStatus.CREATED, data: product };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Return all products.' })
  async findAll() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Return the product.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  async findOne(@Param('id') id: string) {
    const product = await this.productService.getProduct(+id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID', type: 'number' })
  @ApiBody({ type: UpdateProductDto })
  @ApiResponse({ status: 200, description: 'The product has been successfully updated.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      const product = await this.productService.updateProduct(+id, updateProductDto);
      return { statusCode: HttpStatus.OK, data: product };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'The product has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  async remove(@Param('id') id: string) {
    try {
      await this.productService.deleteProduct(+id);
      return { statusCode: HttpStatus.OK, message: 'Product successfully deleted.' };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: error.message,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
