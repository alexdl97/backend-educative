import { EntityRepository, Repository } from 'typeorm';
import { CreateLevelSchoolBranchDto } from '../dto/create-level-school-branch.dto';
import { LevelSchoolBranch } from '../entities/level-school-branch.entity';

@EntityRepository(LevelSchoolBranch)
export class LevelSchoolBranchRepository extends Repository<LevelSchoolBranch> {
  async createLevelSchoolBranch(
    createLevelSchoolBranchDto: CreateLevelSchoolBranchDto,
  ): Promise<LevelSchoolBranch> {
    const levelSchoolBranch = this.create(createLevelSchoolBranchDto);
    await this.save(levelSchoolBranch);

    return levelSchoolBranch;
  }

  async bulkCreate(
    createLevelsSchoolBranch: CreateLevelSchoolBranchDto[],
  ): Promise<LevelSchoolBranch[]> {
    let levelsSchoolBranch = [];
    for (const createLevelSchoolBranch of createLevelsSchoolBranch) {
      const levelSchoolBranch = this.create(createLevelSchoolBranch);
      await this.save(levelSchoolBranch);
      levelsSchoolBranch.push(levelSchoolBranch);
    }
    return levelsSchoolBranch;
  }
}
