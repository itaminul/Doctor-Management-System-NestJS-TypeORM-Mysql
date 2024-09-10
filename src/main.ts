import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './interceptor/response.interceptor';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// Global validation pipe with detailed error messages
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true, 
    forbidNonWhitelisted: true, 
    transform: true, 
    exceptionFactory: (validationErrors = []) => {
      const errors = validationErrors.map(error => {
        return {
          field: error.property,
          errors: Object.values(error.constraints || {}),
        };
      });
      return new BadRequestException({
        statusCode: 400,
        message: 'Validation failed',
        errors: errors,
      });
    },
  }),
);
  app.useGlobalInterceptors(new ResponseInterceptor())
  app.setGlobalPrefix('/api')
  await app.listen(3000);
}
bootstrap();
