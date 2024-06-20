import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Stock')
@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @ApiOperation({ summary: 'Create a new stock' })
  @ApiResponse({ status: 201, description: 'The stock has been successfully created.' })
  @Post()
  create(@Body() createStockDto: CreateStockDto) {
    return this.stockService.create(createStockDto);
  }

  @ApiOperation({ summary: 'Get all stocks' })
  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @ApiOperation({ summary: 'Get a stock by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a stock by ID' })
  @ApiResponse({ status: 200, description: 'The stock has been successfully updated.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stockService.update(+id, updateStockDto);
  }

  @ApiOperation({ summary: 'Delete a stock by ID' })
  @ApiResponse({ status: 200, description: 'The stock has been successfully deleted.' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(+id);
  }
}
