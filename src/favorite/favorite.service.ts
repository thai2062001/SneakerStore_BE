import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFavoriteDto: CreateFavoriteDto) {
    return this.prisma.favorite.create({
      data: createFavoriteDto,
    });
  }

  findAll() {
    return this.prisma.favorite.findMany();
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
