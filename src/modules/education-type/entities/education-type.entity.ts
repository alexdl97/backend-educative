import { Exclude } from "class-transformer";
import { EducationTypeSchool } from "src/modules/schools/entities/education-type-school.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class EducationType {

    @PrimaryGeneratedColumn({ name: 'education_type_id' })
    educationTypeId: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(() => EducationTypeSchool, educationTypeSchool => educationTypeSchool.educationType)
    educationTypeSchool!: EducationTypeSchool[];

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