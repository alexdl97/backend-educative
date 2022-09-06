import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CityRepository } from '../city/repositories/city.repository';
import { SchoolTypesRepository } from '../school-type/repositories/school-types.repository';
import { CharactDetSchoolRepository } from './repositories/charact-det-school.repository';
import { EducationTypeSchoolRepository } from './repositories/education-type-school.repository';
import { SchoolBranchsRepository } from './repositories/school-branch.repository';
import { SchoolsRepository } from './repositories/school.repository';
import { SchoolsController } from './schools.controller';
import { SchoolsService } from './schools.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SchoolsRepository,
      SchoolBranchsRepository,
      SchoolTypesRepository,
      CityRepository,
      EducationTypeSchoolRepository,
      CharactDetSchoolRepository
    ]),
    AuthModule,
  ],
  controllers: [SchoolsController],
  providers: [SchoolsService],
})
export class SchoolsModule {}
