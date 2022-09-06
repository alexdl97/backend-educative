import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolTypesRepository } from './repositories/school-types.repository';
import { SchoolTypeController } from './school-type.controller';
import { SchoolTypeService } from './school-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolTypesRepository])],
  controllers: [SchoolTypeController],
  providers: [SchoolTypeService]
})
export class SchoolTypeModule {}
