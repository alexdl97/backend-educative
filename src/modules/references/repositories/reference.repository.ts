import { EntityRepository, Repository } from 'typeorm';
import { CreateReferenceDto } from '../dto/create-reference.dto';
import { Reference } from '../entities/reference.entity';

@EntityRepository(Reference)
export class ReferenceRepository extends Repository<Reference> {
  async createReference(
    createReferenceDto: CreateReferenceDto,
  ): Promise<Reference> {
    const { person, phone, description, schoolBranch } = createReferenceDto;
    const reference = this.create({
      person,
      phone,
      description,
    });
    reference.schoolBranch = schoolBranch;
    await this.save(reference);
    return reference;
  }
}
