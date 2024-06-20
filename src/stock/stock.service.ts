import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StockService {
  constructor(private readonly prisma: PrismaService) {}

  create(createStockDto: CreateStockDto) {
    return this.prisma.stock.create({
      data: createStockDto,
    });
  }

  findAll() {
    return this.prisma.stock.findMany();
  }

  findOne(id: number) {
    return this.prisma.stock.findUnique({
      where: { stock_id: id },
    });
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return this.prisma.stock.update({
      where: { stock_id: id },
      data: updateStockDto,
    });
  }

  remove(id: number) {
    return this.prisma.stock.delete({
      where: { stock_id: id },
    });
  }
}
