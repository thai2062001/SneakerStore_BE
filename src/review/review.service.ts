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
  async getReviewsByProductId(productId: string) {
    // Chuyển đổi productId từ string sang number
    const parsedProductId = parseInt(productId, 10);
  
    // Kiểm tra nếu productId không phải là số hợp lệ
    if (isNaN(parsedProductId)) {
      throw new Error('Invalid productId: expected a number.');
    }
  
    // Tìm tất cả các review liên quan đến sản phẩm
    const reviews = await this.prisma.review.findMany({
      where: {
        productId: parsedProductId,
      },
      include: {
        product: true, // Bao gồm thông tin sản phẩm nếu cần
        user: true,    // Bao gồm thông tin người dùng nếu cần
      },
    });
  
    if (!reviews || reviews.length === 0) {
      throw new NotFoundException(`No reviews found for product with ID ${parsedProductId}`);
    }
  
    return reviews;
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
