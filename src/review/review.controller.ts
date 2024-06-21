import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new review' })
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CreateReviewDto })
  @ApiResponse({
    status: 201,
    description: 'The review has been successfully created.',
    type: CreateReviewDto,
  })
  async create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.createReview(createReviewDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing review by ID' })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'id', description: 'Review ID to update', type: Number })
  @ApiBody({ type: UpdateReviewDto })
  @ApiResponse({ status: 200, description: 'The review has been successfully updated.' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewService.updateReview(id, updateReviewDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a review by ID' })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'id', description: 'Review ID to delete', type: Number })
  @ApiResponse({ status: 200, description: 'The review has been successfully deleted.' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.deleteReview(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a review by ID' })
  @ApiParam({ name: 'id', description: 'Review ID to retrieve', type: Number })
  @ApiResponse({ status: 200, description: 'The review has been successfully retrieved.' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.getReview(id);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all reviews' })
  @ApiResponse({ status: 200, description: 'All reviews have been successfully retrieved.' })
  async findAll() {
    return this.reviewService.getAllReviews();
  }
}
