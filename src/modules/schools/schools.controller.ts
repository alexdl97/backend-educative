import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EntityManager, Transaction, TransactionManager } from 'typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { SchoolsService } from './schools.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('schools')
// @UseGuards(AuthGuard())
export class SchoolsController {
  constructor(private schoolsService: SchoolsService) {}

  @Get()
  getAllSchools() {
    return this.schoolsService.getAllSchools();
  }

  @Post()
  @Transaction()
  createSchool(
    @Body() createSchoolDto: CreateSchoolDto,
    @TransactionManager() manager: EntityManager
  ) {
    return this.schoolsService.createSchool(createSchoolDto, manager);
  }

  @Get(':id')
  getSchoolBranchById(@Param('id') id: string) {
    return this.schoolsService.getSchoolBranchById(id);
  }
}
