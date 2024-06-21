import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('favorite')
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create favorite' })
  @ApiResponse({ status: 201, description: 'The favorite has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createFavoriteDto: CreateFavoriteDto[]) {
    return this.favoriteService.create(createFavoriteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all favorites' })
  @ApiResponse({ status: 200, description: 'Return all favorites.' })
  findAll() {
    return this.favoriteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get favorite by ID' })
  @ApiResponse({ status: 200, description: 'Return the favorite.' })
  @ApiResponse({ status: 404, description: 'Favorite not found.' })
  findOne(@Param('id') id: string) {
    return this.favoriteService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update favorite' })
  @ApiResponse({ status: 200, description: 'The favorite has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Favorite not found.' })
  update(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto) {
    return this.favoriteService.update(+id, updateFavoriteDto);
  }

  
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete favorite' })
  @ApiResponse({ status: 200, description: 'The favorite has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Favorite not found.' })
  remove(@Param('id') id: string) {
    return this.favoriteService.remove(+id);
  }
}
