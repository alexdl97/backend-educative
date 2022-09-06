import { Exclude } from 'class-transformer';
import { SchoolBranch } from 'src/modules/schools/entities/school-branch.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn({ name: 'location_id' })
  locationId: number;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'double' })
  latitude: number;

  @Column({ type: 'double' })
  longitude: number;

  @OneToOne(() => SchoolBranch, schoolBranch => schoolBranch.location)
  @JoinColumn({
    name: 'school_branch_id'
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
