import { Exclude } from 'class-transformer';
import { City } from 'src/modules/city/entities/city.entity';
import { Location } from 'src/modules/location/entities/location.entity';
import { Rating } from 'src/modules/rating/entities/rating.entity';
import { Reference } from 'src/modules/references/entities/reference.entity';
import { SchoolType } from 'src/modules/school-type/entities/school-type.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SchoolStatus } from '../enums/school-status.enum';
import { CharactDetSchool } from './charact_det_school.entity';
import { EducationTypeSchool } from './education-type-school.entity';
import { FileSchoolBranch } from './file-school-branch.entity';
import { GradeSchoolBranch } from './grade-school-branch.entity';
import { LevelSchoolBranch } from './level-school-branch.entity';
import { RequirementSchoolBranch } from './requirement-school-branch.entity';
import { School } from './school.entity';
import { ServiceSchoolBranch } from './service-school-branch.entity';

@Entity()
export class SchoolBranch {
  @PrimaryGeneratedColumn({ name: 'school_branch_id' })
  schoolBranchId: number;

  @Column({ nullable: true })
  code: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: SchoolStatus, default: SchoolStatus.ACTIVE })
  status: SchoolStatus;

  @Column({ name: 'main_photo', nullable: true })
  mainPhoto: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true, type: 'float' })
  rating: number;

  @Column({ nullable: true })
  zone: string;

  @Column({ nullable: true, type: 'float', name: 'monthly_cost' })
  monthlyCost: number;

  @ManyToOne(() => School, (school) => school.schoolBranchs)
  @JoinColumn({
    name: 'school_id',
  })
  school: School;

  @ManyToOne(() => City, (city) => city.schoolBranchs)
  @JoinColumn({
    name: 'city_id',
  })
  city: City;

  @OneToMany(() => Reference, (reference) => reference.schoolBranch)
  reference: Reference[];

  @ManyToOne(() => SchoolType, (schoolType) => schoolType.schoolBranch)
  @JoinColumn({
    name: 'school_type_id',
  })
  schoolType: SchoolType;

  @OneToMany(
    () => EducationTypeSchool,
    (educationTypeSchool) => educationTypeSchool.schoolBranch,
  )
  educationTypesSchool!: EducationTypeSchool[];

  @OneToMany(
    () => CharactDetSchool,
    (charactDetSchool) => charactDetSchool.schoolBranch,
  )
  charactsDetSchool: CharactDetSchool[];

  @OneToMany(
    () => FileSchoolBranch,
    (fileSchoolBranch) => fileSchoolBranch.schoolBranch,
  )
  files: FileSchoolBranch[];

  @OneToMany(
    () => GradeSchoolBranch,
    (gradeSchoolBranch) => gradeSchoolBranch.schoolBranch,
  )
  gradeSchoolBranch: GradeSchoolBranch[];

  @OneToMany(
    () => LevelSchoolBranch,
    (levelSchoolBranch) => levelSchoolBranch.schoolBranch,
  )
  levelsSchoolbranch: LevelSchoolBranch[];

  @OneToMany(
    () => ServiceSchoolBranch,
    (serviceSchoolBranch) => serviceSchoolBranch.schoolBranch,
  )
  servicesSchoolBranch: ServiceSchoolBranch[];

  @OneToMany(
    () => RequirementSchoolBranch,
    (requirementSchoolBranch) => requirementSchoolBranch.schoolBranch,
  )
  requirementsSchoolBranch: RequirementSchoolBranch[];

  @OneToMany(() => Rating, (rating) => rating.schoolBranch)
  ratings: Rating[];

  @OneToOne(() => Location, (location) => location.schoolBranch)
  location: Location;

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
