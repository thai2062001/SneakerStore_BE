// src/product-images/product-image.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';

@Injectable()
export class ProductImageService {
    constructor(private prisma: PrismaService) {}

    async create(createProductImageDto: CreateProductImageDto) {
        const { product_id, image_url } = createProductImageDto;
        return this.prisma.productImage.create({
            data: {
                product_id,
                image_url,
            },
        });
    }

    async findAll() {
        return this.prisma.productImage.findMany();
    }

    async findOne(id: number) {
        return this.prisma.productImage.findUnique({
            where: { image_id: id },
        });
    }

    async update(id: number, updateProductImageDto: UpdateProductImageDto) {
        const { image_url } = updateProductImageDto;
        return this.prisma.productImage.update({
            where: { image_id: id },
            data: {
                image_url,
            },
        });
    }

    async remove(id: number) {
        return this.prisma.productImage.delete({
            where: { image_id: id },
        });
    }
}
