import { Exclude } from 'class-transformer';
import { RequirementType } from 'src/modules/requeriment-type/entities/requirement-type.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { SchoolBranch } from './school-branch.entity';

@Entity()
export class RequirementSchoolBranch {
  @PrimaryGeneratedColumn({ name: 'requirement_school_branch_id' })
  requirementSchoolBranchId: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => SchoolBranch, schoolBranch => schoolBranch.requirementsSchoolBranch)
  @JoinColumn({ name: 'school_branch_id' })
  schoolBranch: SchoolBranch;

  @ManyToOne(() => RequirementType)
  @JoinColumn({ name: 'requirement_type_id' })
  requirementType: RequirementType;

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
