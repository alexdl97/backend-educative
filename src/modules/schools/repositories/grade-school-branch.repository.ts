import { EntityRepository, Repository } from 'typeorm';
import { CreateGradeSchoolBranchDto } from '../dto/create-grade-school-branch.dto';
import { GradeSchoolBranch } from '../entities/grade-school-branch.entity';

@EntityRepository(GradeSchoolBranch)
export class GradeSchoolBranchRepository extends Repository<GradeSchoolBranch> {
  async createGradeSchoolBranch(
    createGradeSchoolBranchDto: CreateGradeSchoolBranchDto,
  ): Promise<GradeSchoolBranch> {
    const gradeSchoolBranch = this.create(createGradeSchoolBranchDto);
    await this.save(gradeSchoolBranch);
    return gradeSchoolBranch;
  }

  async bulkCreateGradesSchoolBranch(
    createGradesSchoolBranchDto: CreateGradeSchoolBranchDto[],
  ): Promise<GradeSchoolBranch[]> {
    let gradesSchoolBranch = [];
    for (const gradeSchoolBranchDto of createGradesSchoolBranchDto) {
      const gradeSchoolBranch = this.create(gradeSchoolBranchDto);
      await this.save(gradeSchoolBranch);
      gradesSchoolBranch.push(gradeSchoolBranch);
    }
    return gradesSchoolBranch;
  }
}
