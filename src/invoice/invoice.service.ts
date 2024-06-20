import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  create(createInvoiceDto: CreateInvoiceDto) {
    return this.prisma.invoice.create({
      data: createInvoiceDto,
    });
  }

  findAll() {
    return this.prisma.invoice.findMany();
  }

  findOne(id: number) {
    return this.prisma.invoice.findUnique({
      where: { invoice_id: id },
    });
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return this.prisma.invoice.update({
      where: { invoice_id: id },
      data: updateInvoiceDto,
    });
  }

  remove(id: number) {
    return this.prisma.invoice.delete({
      where: { invoice_id: id },
    });
  }
}
