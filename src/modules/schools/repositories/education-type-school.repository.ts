import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { CreateEducationTypeSchoolDto } from '../dto/create-education-type-school.dto';
// import { StoreEducationTypesSchoolDto } from '../dto/store-education-types-school.dto';
import { EducationTypeSchool } from '../entities/education-type-school.entity';
import { SchoolBranch } from '../entities/school-branch.entity';

@EntityRepository(EducationTypeSchool)
export class EducationTypeSchoolRepository extends Repository<EducationTypeSchool> {
  // async storeEducationTypes(
  //   storeEducationTypesSchoolDto: StoreEducationTypesSchoolDto,
  //   manager: EntityManager
  // ): Promise<EducationTypeSchool[]> {
  //   const { schoolBranch, educationTypes } = storeEducationTypesSchoolDto;

  //   let educationTypesCreateds = [];
  //   for (const educationType of educationTypes) {
  //     console.log('Education Type ===> ', educationType);
  //     const educationTypeCreated = this.create({
  //       educationType,
  //       schoolBranch,
  //     });
  //     await manager.save(educationTypeCreated);
  //     educationTypesCreateds.push(educationTypeCreated);
  //   }
  //   return educationTypesCreateds;
  // }

  async bulkCreate(
    createEducationTypeSchoolDto: CreateEducationTypeSchoolDto[],
    schoolBranch: SchoolBranch,
    manager: EntityManager,
  ): Promise<EducationTypeSchool[]> {
    let educationTypesSchool = [];
    for (const createEducationTypeSchool of createEducationTypeSchoolDto) {
      const { description, price, educationType } = createEducationTypeSchool;
      const educationTypeSchool = this.create({
        description,
        price,
        schoolBranch,
        educationType,
      });
      await manager.save(educationTypeSchool);
      educationTypesSchool.push(educationTypeSchool);
    }

    return educationTypesSchool;
  }
}
