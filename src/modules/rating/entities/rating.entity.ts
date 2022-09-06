import { Exclude } from 'class-transformer';
import { SchoolBranch } from 'src/modules/schools/entities/school-branch.entity';
import { User } from 'src/modules/users/user.entity';
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

@Entity()
export class Rating {
  @PrimaryGeneratedColumn({ name: 'rating_id' })
  ratingId: number;

  @Column({ type: 'float' })
  point: number;

  @Column({ type: 'text' })
  comment: string;

  @Column({ name: 'date_time', type: 'date' })
  dateTime: string;

  @ManyToOne(() => User, (user) => user.ratings)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @ManyToOne(() => SchoolBranch, (schoolBranch) => schoolBranch.ratings)
  @JoinColumn({
    name: 'school_branch_id',
  })
  schoolBranch: SchoolBranch;

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
