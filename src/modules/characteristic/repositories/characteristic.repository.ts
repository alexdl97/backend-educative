import { EntityRepository, Repository } from "typeorm";
import { Characteristic } from "../entities/characteristic.entity";

@EntityRepository(Characteristic)
export class CharacteristicRepository extends Repository<Characteristic> {

    getCharacteristicsFowShowSearch(): Promise<Characteristic[]> {
        return this.find({
            relations: [ 'characteristicsOption' ],
            where: {
                showInSearch: true,
            },
            order: {
                order: 'ASC'
            }
        });
    }

}