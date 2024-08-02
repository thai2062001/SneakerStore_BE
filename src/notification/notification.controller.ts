import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new notification' })
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CreateNotificationDto })
  @ApiResponse({ status: 201, description: 'The notification has been successfully created.' })
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Retrieve all notifications' })
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 200, description: 'All notifications have been successfully retrieved.' })
  async findAll() {
    return this.notificationService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a notification by ID' })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'id', description: 'Notification ID to retrieve', type: Number })
  @ApiResponse({ status: 200, description: 'The notification has been successfully retrieved.' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.notificationService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a notification by ID' })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'id', description: 'Notification ID to update', type: Number })
  @ApiBody({ type: UpdateNotificationDto })
  @ApiResponse({ status: 200, description: 'The notification has been successfully updated.' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateNotificationDto: UpdateNotificationDto) {
    return this.notificationService.update(id, updateNotificationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a notification by ID' })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'id', description: 'Notification ID to delete', type: Number })
  @ApiResponse({ status: 200, description: 'The notification has been successfully deleted.' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.notificationService.remove(id);
  }
  
  @UseGuards(JwtAuthGuard)
  @Patch(':id/mark-as-read')
  @ApiOperation({ summary: 'Mark a notification as read' })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'id', description: 'Notification ID to mark as read', type: Number })
  @ApiResponse({ status: 200, description: 'The notification has been marked as read.' })
  async markAsRead(@Param('id', ParseIntPipe) id: number) {
    return this.notificationService.markAsRead(id);
  }
}

