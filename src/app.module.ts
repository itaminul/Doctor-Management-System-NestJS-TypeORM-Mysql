import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source';
import { CreatepatientsrxController } from './createpatientsrx/createpatientsrx.controller';
import { CreatepatientsrxModule } from './createpatientsrx/createpatientsrx.module';

@Module({
  imports: [ TypeOrmModule.forRoot(AppDataSource), CreatepatientsrxModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
