import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsInt } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'username', description: 'The name ' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'test@gmail.com', description: 'The email of test ' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password', description: 'The password ' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 1, description: 'The role id ' })
  @IsNotEmpty()
  @IsInt()
  role_id: number;
}
