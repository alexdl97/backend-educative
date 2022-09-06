import { EntityRepository, Repository } from "typeorm";
import { EducationType } from "../entities/education-type.entity";

@EntityRepository(EducationType)
export class EducationTypeRespository extends Repository<EducationType> {

}