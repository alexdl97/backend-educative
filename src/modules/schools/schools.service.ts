import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { EducationTypeSchool } from './entities/education-type-school.entity';
import { SchoolBranch } from './entities/school-branch.entity';
import { School } from './entities/school.entity';
import { EducationTypeSchoolRepository } from './repositories/education-type-school.repository';
import { SchoolBranchsRepository } from './repositories/school-branch.repository';
import { SchoolsRepository } from './repositories/school.repository';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(SchoolsRepository)
    private schoolsRepository: SchoolsRepository,
    @InjectRepository(SchoolBranchsRepository)
    private schoolBranchRepository: SchoolBranchsRepository,
    @InjectRepository(EducationTypeSchoolRepository)
    private educationTypeSchool: EducationTypeSchoolRepository,
  ) {}

  async getAllSchools() {
    const schoolBranchs = await this.schoolBranchRepository.find();
    return {
      schoolBranchs: schoolBranchs,
    };
  }

  async createSchool(
    createSchoolDto: CreateSchoolDto,
    manager: EntityManager,
  ): Promise<SchoolBranch> {
    const { createEducationTypesSchool } = createSchoolDto;
    const school = await this.schoolsRepository.createSchool(
      createSchoolDto,
      manager,
    );
    const schoolBranch = await this.schoolBranchRepository.createSchoolBranch(
      createSchoolDto,
      school,
      manager,
    );

    const educationTypesSchool = await this.educationTypeSchool.bulkCreate(
      createEducationTypesSchool,
      schoolBranch,
      manager,
    );
    schoolBranch.educationTypesSchool = educationTypesSchool;
    return schoolBranch;
  }

  async getSchoolBranchById(id: string): Promise<SchoolBranch> {
    const schoolBranch = await this.schoolBranchRepository.findOne({
      relations: [
        'school',
        'files',
        'city',
        'requirementsSchoolBranch',
        'location',
      ],
      join: {
        alias: 'schoolBranch',
        leftJoinAndSelect: {
          servicesSchoolBranch: 'schoolBranch.servicesSchoolBranch',
          service: 'servicesSchoolBranch.service',
          educationTypesSchool: 'schoolBranch.educationTypesSchool',
          educationType: 'educationTypesSchool.educationType',
          charactsDetSchool: 'schoolBranch.charactsDetSchool',
          characteristicOption: 'charactsDetSchool.characteristicOption',
          characteristic: 'characteristicOption.characteristic',
          levelsSchoolbranch: 'schoolBranch.levelsSchoolbranch',
          level: 'levelsSchoolbranch.level',
          ratings: 'schoolBranch.ratings',
          user: 'ratings.user',
        },
      },
      where: {
        schoolBranchId: id,
      },
    });
    return schoolBranch;
  }
}
