import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiPropertyOptional({ example: 'username', description: 'The Username' })
    username?: string;
    @ApiPropertyOptional({ example: 'test@gmail.com', description: 'The email' })
    email?: string;
    @ApiPropertyOptional({ example: '123456789De', description: 'The password' })
    password?: string;

}
