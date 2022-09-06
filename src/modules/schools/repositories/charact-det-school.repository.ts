import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { CreateCharactDetSchoolDto } from '../dto/create-charact-det-school.dto';
import { CharactDetSchool } from '../entities/charact_det_school.entity';

@EntityRepository(CharactDetSchool)
export class CharactDetSchoolRepository extends Repository<CharactDetSchool> {
  async bulkCreate(
    createCharactDetSchoolsDto: CreateCharactDetSchoolDto[],
    manager: EntityManager,
  ): Promise<CharactDetSchool[]> {
    let charactsDetSchool: CharactDetSchool[] = [];
    for (const createCharactDetSchool of createCharactDetSchoolsDto) {
      const { value, description, schoolBranch } = createCharactDetSchool;
      const charactDetSchool = this.create({
        value,
        description,
        schoolBranch,
      });

      await manager.save(charactDetSchool);
      charactsDetSchool.push(charactDetSchool);
    }

    return charactsDetSchool;
  }
}
