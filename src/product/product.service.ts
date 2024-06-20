import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: CreateProductDto) {
    const { name, description, price, image_url, brand_id, category_id } = data;

    try {
      return this.prisma.product.create({
        data: {
          name,
          description,
          price,
          image_url,
          brand: { connect: { brand_id } },
          category: category_id ? { connect: { category_id } } : undefined,
        },
        include: {
          brand: true,
          category: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(product_id: number, data: UpdateProductDto) {
    const { name, description, price, image_url, brand_id, category_id } = data;

    try {
      return this.prisma.product.update({
        where: { product_id },
        data: {
          name,
          description,
          price,
          image_url,
          brand: { connect: { brand_id } },
          category: category_id ? { connect: { category_id } } : undefined,
        },
        include: {
          brand: true,
          category: true,
        },
      });
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
      },
    });
  }

  async getAllProducts() {
    return this.prisma.product.findMany({
      include: {
        brand: true,
        category: true,
      },
    });
  }
}
