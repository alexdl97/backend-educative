import { Exclude } from "class-transformer";
import { SchoolBranch } from "src/modules/schools/entities/school-branch.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class SchoolType {

    @PrimaryGeneratedColumn({ name: 'school_type_id' })
    schoolTypeId: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(() => SchoolBranch, schoolBranch => schoolBranch.schoolType)
    schoolBranch: SchoolBranch[];

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