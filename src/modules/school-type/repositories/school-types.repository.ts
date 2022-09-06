import { EntityRepository, Repository } from "typeorm";
import { SchoolType } from "../entities/school-type.entity";

@EntityRepository(SchoolType)
export class SchoolTypesRepository extends Repository<SchoolType> {

    

}