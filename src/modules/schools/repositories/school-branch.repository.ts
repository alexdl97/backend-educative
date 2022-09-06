import { EntityManager, EntityRepository, Repository, Transaction } from 'typeorm';
import { CreateSchoolDto } from '../dto/create-school.dto';
import { SchoolBranch } from '../entities/school-branch.entity';
import { School } from '../entities/school.entity';

@EntityRepository(SchoolBranch)
export class SchoolBranchsRepository extends Repository<SchoolBranch> {  

  async createSchoolBranch(
    createSchoolDto: CreateSchoolDto,
    school: School,
    manager: EntityManager
  ): Promise<SchoolBranch> {
    const { code, name, city, schoolType } = createSchoolDto;
    const schoolBranch = this.create({
      code,
      name,
    });

    schoolBranch.school = school;
    schoolBranch.city = city;
    schoolBranch.schoolType = schoolType;

    await manager.save(schoolBranch);
    return schoolBranch;
  }
}
