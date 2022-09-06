import { Exclude } from "class-transformer";
import { SchoolBranch } from "src/modules/schools/entities/school-branch.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class City {

    @PrimaryGeneratedColumn({ name: 'city_id' })
    cityId: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true, type: 'float' })
    latitude: number;

    @Column({ nullable: true, type: 'float' })
    longitude: number;

    @OneToOne(() => City)
    @JoinColumn({
        name: 'city_father_id'
    })
    city: City;

    @OneToMany(() => SchoolBranch, schoolBranch => schoolBranch.city)
    schoolBranchs: SchoolBranch[];

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
