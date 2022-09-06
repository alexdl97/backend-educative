import { Exclude } from 'class-transformer';
import { SchoolBranch } from 'src/modules/schools/entities/school-branch.entity';
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
export class Reference {
  @PrimaryGeneratedColumn({ name: 'reference_id' })
  referenceId: number;

  @Column()
  person: string;

  @Column()
  phone: string;

  @Column()
  description: string;

  @ManyToOne(() => SchoolBranch, schoolBranch => schoolBranch.reference)
  @JoinColumn({
    name: 'school_type_id',
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
