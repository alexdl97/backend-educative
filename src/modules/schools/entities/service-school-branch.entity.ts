import { Exclude } from 'class-transformer';
import { Service } from 'src/modules/service/entities/service.entity';
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
export class ServiceSchoolBranch {
  @PrimaryGeneratedColumn({ name: 'service_school_branch_id' })
  serviceSchoolBranchId: number;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  note: string;

  @ManyToOne(() => SchoolBranch)
  @JoinColumn({ name: 'school_branch_id' })
  schoolBranch: SchoolBranch;

  @ManyToOne(() => Service)
  @JoinColumn({ name: 'service_id' })
  service: Service;

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
