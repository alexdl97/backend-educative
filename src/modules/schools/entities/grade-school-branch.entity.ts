import { Exclude } from 'class-transformer';
import { Grade } from 'src/modules/grade/entities/grade.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SchoolBranch } from './school-branch.entity';

@Entity()
export class GradeSchoolBranch {
  @PrimaryGeneratedColumn({ name: 'grade_school_branch_id' })
  gradeSchoolBranchId: number;

  @Column({ nullable: true })
  parallel: string;

  @Column({ nullable: true })
  shift: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(
    () => SchoolBranch,
    (schoolBranch) => schoolBranch.gradeSchoolBranch,
  )
  @JoinColumn({ name: 'school_branch_id' })
  schoolBranch: SchoolBranch;

  @ManyToOne(() => Grade, (grade) => grade.gradeSchoolBranch)
  @JoinColumn({ name: 'grade_id' })
  grade: Grade;

  @Exclude()
  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: string;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: string;

  @Exclude()
  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: string;
}
