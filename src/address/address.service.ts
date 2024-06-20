import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async create(createAddressDto: CreateAddressDto) {
    const { user_id, street, city, country } = createAddressDto;
    return this.prisma.address.create({
      data: {
        user_id,
        street,
        city,
        country,
      },
    });
  }

  async findAll() {
    return this.prisma.address.findMany();
  }

  async findOne(id: number) {
    return this.prisma.address.findUnique({
      where: { address_id: id },
    });
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    const { user_id, street, city, country } = updateAddressDto;
    return this.prisma.address.update({
      where: { address_id: id },
      data: {
        user_id,
        street,
        city,
        country,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.address.delete({
      where: { address_id: id },
    });
  }
}
