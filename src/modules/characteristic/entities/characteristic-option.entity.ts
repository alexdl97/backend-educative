import { CharactDetSchool } from "src/modules/schools/entities/charact_det_school.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Characteristic } from "./characteristic.entity";

@Entity()
export class CharacteristicOption {

    @PrimaryGeneratedColumn({ name: 'characteristic_option_id' })
    characteristicOptionId: number;

    @Column()
    name: string;


    @ManyToOne(() => Characteristic, characteristic => characteristic.characteristicsOption)
    @JoinColumn({
        name: 'characteristic_id',
    })
    characteristic: Characteristic;

    @OneToMany(() => CharactDetSchool, characteristicsDetSchool => characteristicsDetSchool.characteristicOption)
    characteristicsDetSchool: CharactDetSchool[]

}
