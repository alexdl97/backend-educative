import { EntityRepository, Repository } from 'typeorm';
import { createRequirementSchoolBranchDto } from '../dto/create-requirement-school-branch.dto';
import { RequirementSchoolBranch } from '../entities/requirement-school-branch.entity';

@EntityRepository(RequirementSchoolBranch)
export class RequirementSchoolBranchRepository extends Repository<RequirementSchoolBranch> {
  async createRequiremenSchoolBranch(
    createRequirementSchoolBranchDto: createRequirementSchoolBranchDto,
  ): Promise<RequirementSchoolBranch> {
    const requirementSchoolBranch = this.create(
      createRequirementSchoolBranchDto,
    );
    await this.save(requirementSchoolBranch);

    return requirementSchoolBranch;
  }

  async bulkCreate(
    createRequirementsScoolBranch: createRequirementSchoolBranchDto[],
  ): Promise<RequirementSchoolBranch[]> {
    let requirementsSchoolBranch = [];
    for (const createRequirementSchoolBranchDto of createRequirementsScoolBranch) {
      const requirementSchoolBranch = this.create(
        createRequirementSchoolBranchDto,
      );
      await this.save(requirementSchoolBranch);
      requirementsSchoolBranch.push(requirementSchoolBranch);
    }
    return requirementsSchoolBranch;
  }
}
