import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) {}

  async createBrand(data: CreateBrandDto) {
    return this.prisma.brand.create({
      data,
    });
  }

  async updateBrand(brand_id: number, data: UpdateBrandDto) {
    return this.prisma.brand.update({
      where: { brand_id },
      data,
    });
  }

  async deleteBrand(brand_id: number) {
    return this.prisma.brand.delete({
      where: { brand_id },
    });
  }

  async getBrand(brand_id: number) {
    return this.prisma.brand.findUnique({
      where: { brand_id },
      include: {
        products: true, // Include related products
      },
    });
  }

  async getAllBrands() {
    return this.prisma.brand.findMany();
  }
}
