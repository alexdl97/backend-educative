import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SchoolStatus } from "../enums/school-status.enum";
import { SchoolBranch } from "./school-branch.entity";

@Entity()
export class School {

    @PrimaryGeneratedColumn({ name: 'school_id' })
    schoolId: number;

    @Column({ nullable: true })
    code: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    mission: string;

    @Column({ nullable: true })
    vision: string;

    @Column({ type: 'enum', enum: SchoolStatus, default: SchoolStatus.ACTIVE })
    status: SchoolStatus;

    @OneToMany(() => SchoolBranch, schoolBranch => schoolBranch.school)
    schoolBranchs: SchoolBranch[]

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