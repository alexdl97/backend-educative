import { Exclude } from 'class-transformer';
import { CharactDetSchool } from 'src/modules/schools/entities/charact_det_school.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CharacteristicOption } from './characteristic-option.entity';

@Entity()
export class Characteristic {
  @PrimaryGeneratedColumn({ name: 'characteristic_id' })
  characteristicId: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  required: boolean;

  @Column({ name: 'show_in_search', default: true })
  showInSearch: boolean;

  @Column()
  order: number;

  @OneToMany(() => CharacteristicOption, characteristicsOption => characteristicsOption.characteristic)
  characteristicsOption: CharacteristicOption[]

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
