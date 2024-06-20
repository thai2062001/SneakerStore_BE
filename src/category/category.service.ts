import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateProductDto } from 'src/product/dto/update-product.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: CreateCategoryDto) {
    return this.prisma.category.create({
      data:{
        name:data.name
      },
    });
  }

  async updateCategory(category_id: number, data: UpdateProductDto) {
    return this.prisma.category.update({
      where: { category_id },
      data:{
        name:data.name
      },
    });
  }

  async deleteCategory(category_id: number) {
    return this.prisma.category.delete({
      where: { category_id },
    });
  }

  async getCategory(category_id: number) {
    return this.prisma.category.findUnique({
      where: { category_id },
    });
  }

  async getAllCategories() {
    return this.prisma.category.findMany();
  }
}
