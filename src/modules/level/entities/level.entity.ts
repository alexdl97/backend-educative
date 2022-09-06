import { Exclude } from 'class-transformer';
import { Grade } from 'src/modules/grade/entities/grade.entity';
import { LevelSchoolBranch } from 'src/modules/schools/entities/level-school-branch.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Level {
  @PrimaryGeneratedColumn({ name: 'level_id' })
  levelId: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  starting_age: number;

  @Column({ nullable: true })
  final_age: number;

  @OneToMany(() => Grade, (grade) => grade.level)
  grades: Grade[];

  @OneToMany(
    () => LevelSchoolBranch,
    (levelsSchoolBranch) => levelsSchoolBranch.level,
  )
  levelsSchoolBranch: LevelSchoolBranch[];

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
