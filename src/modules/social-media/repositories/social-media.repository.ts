import { EntityRepository, Repository } from "typeorm";
import { CreateSocialMediaDto } from "../dto/create-social-media.dto";
import { SocialMedia } from "../entities/social-media.entity";

@EntityRepository(SocialMedia)
export class SocialMediaRepository extends Repository<SocialMedia> {

    async createSocialMedia(createSocialMedia: CreateSocialMediaDto): Promise<SocialMedia> {
        const { name, link, description } = createSocialMedia;
        const socialMedia = this.create({
            name,
            link,
            description
        });
        
        return null;
    }

    // async createReference(
    //     createReferenceDto: CreateReferenceDto,
    //   ): Promise<Reference> {
    //     const { person, phone, description, schoolBranch } = createReferenceDto;
    //     const reference = this.create({
    //       person,
    //       phone,
    //       description,
    //     });
    //     reference.schoolBranch = schoolBranch;
    //     await this.save(reference);
    //     return reference;
    //   }
}