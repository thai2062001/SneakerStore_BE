import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'user@example.com', description: 'User email' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'User password' })
  password: string;

  @ApiProperty({ example: 'pham ba thai', description: 'Username' })
  username: string;
  @ApiProperty({ example: '0987581794', description: 'PhoneNumber' })
  phone_number: string;


}

