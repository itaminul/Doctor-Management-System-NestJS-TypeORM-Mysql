import { ExceptionFilter, Catch, ArgumentsHost, Logger, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    // Log the incoming exception
    this.logger.error(`Caught exception: ${exception}`, exception instanceof Error ? exception.stack : '');

    // Ensure response is not already sent
    if (response.headersSent) {
      this.logger.warn('Headers already sent, skipping response handling');
      return;
    }

    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    let message = 'Unknown error';

    // Safely extract the response
    if (exception instanceof HttpException) {
      const responseObj = exception.getResponse();
      
      // If responseObj is a string, assign it directly
      if (typeof responseObj === 'string') {
        message = responseObj;
      }
      // If responseObj is an object, extract the message field
      else if (typeof responseObj === 'object' && responseObj !== null) {
        message = (responseObj as any).message || 'Unknown error';
      }
    }

    // Log the error with the stack trace
    this.logger.error(`Error: ${message}`, exception instanceof Error ? exception.stack : '');

    // Send the structured response only if headers have not been sent
    if (!response.headersSent) {
      response.status(status).json({
        statusCode: status,
        message: typeof message === 'string' ? message : 'Unknown error',
        error: exception instanceof Error ? exception.message : 'Unknown error',
      });
    }
  }
}
