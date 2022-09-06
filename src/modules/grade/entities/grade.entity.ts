import { Exclude } from 'class-transformer';
import { Level } from 'src/modules/level/entities/level.entity';
import { GradeSchoolBranch } from 'src/modules/schools/entities/grade-school-branch.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn({ name: 'grade_id' })
  gradeId: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Level, (level) => level.grades)
  @JoinColumn({
    name: 'level_id',
  })
  level: Level;

  @OneToMany(
    () => GradeSchoolBranch,
    (gradeSchoolBranch) => gradeSchoolBranch.schoolBranch,
  )
  gradeSchoolBranch: GradeSchoolBranch[];

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
