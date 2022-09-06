import { Exclude } from 'class-transformer';
import { CharacteristicOption } from 'src/modules/characteristic/entities/characteristic-option.entity';
import { Characteristic } from 'src/modules/characteristic/entities/characteristic.entity';
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
export class CharactDetSchool {
  @PrimaryGeneratedColumn({ name: 'charact_det_school_id' })
  charactDetSchoolId!: number;

  @Column()
  value!: string;

  @Column({ nullable: true })
  description!: string;

  @ManyToOne(() => SchoolBranch, schoolBranch => schoolBranch.charactsDetSchool)
  @JoinColumn({
    name: 'school_branch_id',
  })
  schoolBranch!: SchoolBranch;

  @ManyToOne(() => CharacteristicOption, characteristicOption => characteristicOption.characteristicsDetSchool)
  @JoinColumn({
    name: 'characteristic_option_id',
  })
  characteristicOption: CharacteristicOption;

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
