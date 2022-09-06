import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from 'src/auth/auth.module';
import { configDisk, fileFilter } from 'src/common/helpers/functions-aux.helper';
import { PruebaController } from './prueba.controller';

@Module({
  imports: [
    AuthModule,
    MulterModule.register({
      dest: './uploads',
      fileFilter: fileFilter,
      storage: configDisk
    })
  ],
  controllers: [PruebaController],
})
export class PruebaModule {}
