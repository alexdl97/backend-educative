import { Exclude } from 'class-transformer';
import { RequirementSchoolBranch } from 'src/modules/schools/entities/requirement-school-branch.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class RequirementType {
  @PrimaryGeneratedColumn({ name: 'requeriment_type_id' })
  requerimentTypeId: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(
    () => RequirementSchoolBranch,
    (requirementSchoolBranch) => requirementSchoolBranch.requirementType,
  )
  @JoinColumn({ name: 'requirementSchoolBranch' })
  requirementsSchoolBranch: RequirementSchoolBranch[];

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
