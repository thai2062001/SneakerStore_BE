// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors'; // Import cors module
import { Logger } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  // Enable CORS
  app.use(cors());

  // Swagger configuration
  const options = new DocumentBuilder()
    .setTitle('Sneaker Store API')
    .setDescription('API documentation for Sneaker Store')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
