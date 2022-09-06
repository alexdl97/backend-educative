import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SchoolBranch } from "./school-branch.entity";

@Entity()
export class FileSchoolBranch {

    @PrimaryGeneratedColumn({ name: 'file_school_branch_id' })
    fileSchoolBranchId: number;

    @Column()
    name: string;

    @Column({ name: 'mime_type' })
    mimeType: string;

    @Column()
    path: string;

    @Column()
    extension: string;

    @Column({ nullable: true })
    description: string;

    @ManyToOne(() => SchoolBranch, schoolBranch => schoolBranch.files)
    @JoinColumn({
        name: 'school_branch_id'
    })
    schoolBranch: SchoolBranch;

}