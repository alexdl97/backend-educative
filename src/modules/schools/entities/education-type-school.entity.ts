import { Exclude } from "class-transformer";
import { EducationType } from "src/modules/education-type/entities/education-type.entity";
import { SchoolType } from "src/modules/school-type/entities/school-type.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SchoolBranch } from "./school-branch.entity";

@Entity()
export class EducationTypeSchool {

    @PrimaryGeneratedColumn({ name: 'education_type_school_id' })
    educationTypeSchoolId!: number;

    @Column({ nullable: true })
    description: string;

    @Column({ type: 'float', nullable: true })
    price!: number;

    @ManyToOne(() => SchoolBranch, schoolBranch => schoolBranch.educationTypesSchool)
    @JoinColumn({
        name: 'school_branch_id',
    })
    schoolBranch!: SchoolBranch;

    @ManyToOne(() => EducationType, educationType => educationType.educationTypeSchool)
    @JoinColumn({
        name!: 'education_type_id',
    })
    educationType!: EducationType;

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