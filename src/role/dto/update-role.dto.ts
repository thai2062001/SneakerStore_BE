import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateRoleDto {
  @ApiPropertyOptional({ example: 'User', description: 'The name of the role' })
  role_name?: string;
}
