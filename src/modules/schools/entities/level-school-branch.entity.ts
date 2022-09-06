import { Exclude } from 'class-transformer';
import { Level } from 'src/modules/level/entities/level.entity';
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
export class LevelSchoolBranch {
  @PrimaryGeneratedColumn({ name: 'level_school_branch_id' })
  levelSchoolBranchId: number;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(
    () => SchoolBranch,
    (schoolBranch) => schoolBranch.levelsSchoolbranch,
  )
  @JoinColumn({ name: 'school_branch_id' })
  schoolBranch: SchoolBranch;

  @ManyToOne(() => Level, (level) => level.levelsSchoolBranch)
  @JoinColumn({ name: 'level_id' })
  level: Level;

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
