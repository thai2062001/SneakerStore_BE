import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFavoriteDto: CreateFavoriteDto[]) {
    // Validate if all products exist
    const productIds = createFavoriteDto.flatMap((dto) => dto.product_ids);
    const existingProducts = await this.prisma.product.findMany({
      where: { product_id: { in: productIds } },
    });

    if (existingProducts.length !== productIds.length) {
      throw new BadRequestException('One or more products do not exist');
    }

    // Create favorite records
    const favoritesData = createFavoriteDto.flatMap((dto) =>
      dto.product_ids.map((product_id) => ({
        user_id: dto.user_id,
        product_id: product_id,
      }))
    );

    return this.prisma.favorite.createMany({
      data: favoritesData,
    });
  }


  findAll() {
    return this.prisma.favorite.findMany({
      include: {
        product: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.favorite.findUnique({
      where: { favorite_id: id },
    });
  }

  update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    return this.prisma.favorite.update({
      where: { favorite_id: id },
      data: updateFavoriteDto,
    });
  }

  remove(id: number) {
    return this.prisma.favorite.delete({
      where: { favorite_id: id },
    });
  }
}
