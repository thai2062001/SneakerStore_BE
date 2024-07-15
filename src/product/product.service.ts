import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateStockDto } from 'src/stock/dto/create-stock.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UpdateStockDto } from 'src/stock/dto/update-stock.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: CreateProductDto) {
    const { name, description, price, image_url, brand_id, category_id, gender, stocks, productImages } = data;

    try {
      const product = await this.prisma.product.create({
        data: {
          name,
          description,
          price,
          gender,
          image_url,
          brand: { connect: { brand_id } },
          category: category_id ? { connect: { category_id } } : undefined,
          stock: {
            create: stocks.map((stock: CreateStockDto) => ({
              size: stock.size,
              color: stock.color,
              quantity: stock.quantity,
            })),
          },
          images: {
            create: productImages.map(image => ({
              image_url: image.image_url,
            })),
          },
        },
        include: {
          brand: true,
          category: true,
          stock: true,
          images: true,
          reviews: true,
        },
      });
      return product;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(product_id: number, data: UpdateProductDto) {
    const { name, description, price, image_url, brand_id, category_id, stocks, productImages } = data;

    try {
      const product = await this.prisma.product.update({
        where: { product_id },
        data: {
          name,
          description,
          price,
          image_url,
          brand: { connect: { brand_id } },
          category: category_id ? { connect: { category_id } } : undefined,
          stock: {
            deleteMany: {}, // Xóa tất cả các stock hiện tại
            create: stocks.map((stock: UpdateStockDto) => ({
              size: stock.size,
              color: stock.color,
              quantity: stock.quantity,
            })),
          },
          images: {
            deleteMany: {}, // Xóa tất cả các hình ảnh hiện tại
            create: productImages.map(image => ({
              image_url: image.image_url,
  
            })),
          },
        },
        include: {
          brand: true,
          category: true,
          stock: true,
          images: true,
          reviews: true,
        },
      });
      return product;
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(product_id: number) {
    return this.prisma.product.delete({
      where: { product_id },
    });
  }

  async getProduct(product_id: number) {
    return this.prisma.product.findUnique({
      where: { product_id },
      include: {
        brand: true,
        category: true,
        stock: true,
        images: true,
        reviews: true,
      },
    });
  }

  async getAllProducts() {
    return this.prisma.product.findMany({
      include: {
        brand: true,
        category: true,
        stock: true,
        images: true,
        reviews: true,
      },
    });
  }

  async getFilteredProducts(filters: {
    gender?: string;
    brand?: string[];
    producttype?: string[];
    shoestyle?: string;
    sort?: string;
  }) {
    const { gender, brand, producttype, shoestyle, sort } = filters;

    const orderBy = {};
    if (sort) {
      const [sortField, sortOrder] = sort.split('-');
      orderBy[sortField] = sortOrder.toUpperCase();
    }

    const where = {};
    if (gender) {
      where['gender'] = { equals: gender };
    }
    if (brand && brand.length > 0) {
      where['brand'] = { name: { in: brand } }; // Sử dụng in để chấp nhận nhiều giá trị
    }
    if (producttype && producttype.length > 0) {
      where['category'] = { name: { in: producttype } }; // Sử dụng in để chấp nhận nhiều giá trị
    }
    if (shoestyle) {
      where['description'] = { contains: shoestyle };
    }

    try {
      const products = await this.prisma.product.findMany({
        where,
        orderBy,
        include: {
          brand: true,
          category: true,
          stock: true,
          images: true,
          reviews: true,
        },
      });

      return products;
    } catch (error) {
      throw new Error(`Error fetching filtered products: ${error.message}`);
    }
  }
}
