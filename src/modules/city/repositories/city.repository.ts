import { InjectRepository } from "@nestjs/typeorm";
import { EntityRepository, Repository } from "typeorm";
import { City } from "../entities/city.entity";

@EntityRepository(City)
export class CityRepository extends Repository<City> {

}