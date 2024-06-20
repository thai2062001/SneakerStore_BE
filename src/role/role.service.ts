import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {  UpdateRoleDto } from './dto/update-role.dto';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async createRole(data: CreateRoleDto) {
    return this.prisma.role.create({
      data,
    });
  }

  async updateRole(role_id: number, data: UpdateRoleDto) {
    return this.prisma.role.update({
      where: { role_id },
      data,
    });
  }

  async deleteRole(role_id: number) {
    return this.prisma.role.delete({
      where: { role_id },
    });
  }

  async getRole(role_id: number) {
    return this.prisma.role.findUnique({
      where: { role_id },
    });
  }

  async getAllRoles() {
    return this.prisma.role.findMany();
  }
}
