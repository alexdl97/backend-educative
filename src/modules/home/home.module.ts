import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SchoolsRepository } from '../schools/repositories/school.repository';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { SchoolBranchsRepository } from '../schools/repositories/school-branch.repository';
import { CityRepository } from '../city/repositories/city.repository';
import { SchoolTypesRepository } from '../school-type/repositories/school-types.repository';
import { LevelSchoolBranchRepository } from '../schools/repositories/level-school-branch.repository';
import { LevelRepository } from '../level/repositories/level-repository.repository';
import { EducationTypeRespository } from '../education-type/repositories/education-type.repository';
import { CharacteristicRepository } from '../characteristic/repositories/characteristic.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SchoolsRepository,
      SchoolBranchsRepository,
      CityRepository,
      SchoolTypesRepository,
      LevelRepository,
      EducationTypeRespository,
      CharacteristicRepository,
    ]),
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
