import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { CreateSchoolDto } from '../dto/create-school.dto';
import { School } from '../entities/school.entity';

@EntityRepository(School)
export class SchoolsRepository extends Repository<School> {
  async createSchool(createSchoolDto: CreateSchoolDto, manager: EntityManager) {
    const { code, name, description, mission, vision } = createSchoolDto;
    const school = this.create({
      code,
      name,
      description,
      mission,
      vision,
    });
    await manager.save(school);
    return school;
  }
}
