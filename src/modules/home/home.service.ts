import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CharacteristicRepository } from '../characteristic/repositories/characteristic.repository';
import { CityRepository } from '../city/repositories/city.repository';
import { EducationTypeRespository } from '../education-type/repositories/education-type.repository';
import { LevelRepository } from '../level/repositories/level-repository.repository';
import { SchoolTypesRepository } from '../school-type/repositories/school-types.repository';
import { SchoolBranchsRepository } from '../schools/repositories/school-branch.repository';

@Injectable()
export class HomeService {
  constructor(
    // @InjectRepository(SchoolsRepository)
    // private schoolsRepository: SchoolsRepository,
    @InjectRepository(SchoolBranchsRepository)
    private schoolBranchRepository: SchoolBranchsRepository,
    @InjectRepository(CityRepository)
    private cityRepository: CityRepository,
    @InjectRepository(SchoolTypesRepository)
    private schoolTypeRepository: SchoolTypesRepository,
    @InjectRepository(LevelRepository)
    private levelRepository: LevelRepository,
    @InjectRepository(EducationTypeRespository)
    private educationTypeRepository: EducationTypeRespository,
    @InjectRepository(CharacteristicRepository)
    private characteristicRepository: CharacteristicRepository,
  ) {}

  async getDataHome() {
    const schoolBranchs = await this.schoolBranchRepository.find({
      relations: ['school'],
    });
    const cities = await this.cityRepository.find({
      where: {
        city: null,
      },
    });
    const schoolTypes = await this.schoolTypeRepository.find();
    const levels = await this.levelRepository.find();
    const educationTypes = await this.educationTypeRepository.find();
    const characteristics =
      await this.characteristicRepository.getCharacteristicsFowShowSearch();

    return {
      characteristics,
      educationTypes,
      levels,
      schoolTypes,
      cities,
      schoolBranchs,
    };
  }
}
