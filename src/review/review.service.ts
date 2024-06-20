import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async createReview(createReviewDto: CreateReviewDto) {
    const { productId, userId, rating, comment } = createReviewDto;
    return this.prisma.review.create({
      data: {
        productId:createReviewDto.productId,
        userId:createReviewDto.userId,
        rating:createReviewDto.rating,
        comment:createReviewDto.comment,
        createdAt: new Date(),
      },
    });
  }

  async updateReview(reviewId: number, updateReviewDto: UpdateReviewDto) {
    const { rating, comment } = updateReviewDto;
    return this.prisma.review.update({
      where: { review_id: reviewId },
      data: {
        rating,
        comment,
      },
    });
  }

  async deleteReview(reviewId: number) {
    return this.prisma.review.delete({
      where: { review_id: reviewId },
    });
  }

  async getReview(reviewId: number) {
    const review = await this.prisma.review.findUnique({
      where: { review_id: reviewId },
      include: {
        product: true,
        user: true,
      },
    });
    if (!review) {
      throw new NotFoundException(`Review with ID ${reviewId} not found`);
    }
    return review;
  }

  async getAllReviews() {
    return this.prisma.review.findMany({
      include: {
        product: true,
        user: true,
      },
    });
  }
}
