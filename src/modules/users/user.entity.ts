import { Exclude } from 'class-transformer';
import { UsersStatus } from 'src/auth/dto/users-status.dto';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Rating } from '../rating/entities/rating.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  userId: number;

  @Column()
  username: string;

  @Exclude()
  @Column({ nullable: true, default: null })
  password: string;

  @Column({ default: false, name: 'verified_email' })
  verifiedEmail: boolean;

  @Column({ type: 'enum', default: UsersStatus.ACTIVE, enum: UsersStatus })
  status: string;

  @OneToMany(() => Rating, rating => rating.user)
  ratings: Rating[]

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
