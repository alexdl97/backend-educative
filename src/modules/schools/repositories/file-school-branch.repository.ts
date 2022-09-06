import { EntityRepository, Repository } from 'typeorm';
import { CreateFileSchoolBranchDto } from '../dto/create-file-school-branch.dto';
import { FileSchoolBranch } from '../entities/file-school-branch.entity';

@EntityRepository(FileSchoolBranch)
export class FileSchoolBranchRepository extends Repository<FileSchoolBranch> {
  async createFile(
    createFileSchoolBranchDto: CreateFileSchoolBranchDto,
  ): Promise<FileSchoolBranch> {
    const { name, description, mimeType, extension, path } =
      createFileSchoolBranchDto;
    const fileSchoolBranch = this.create({
      name,
      description,
      mimeType,
      extension,
      path,
    });

    await this.save(fileSchoolBranch);
    return fileSchoolBranch;
  }

  async bulkCreate(
    createFilesSchoolBranchDto: CreateFileSchoolBranchDto[],
  ): Promise<FileSchoolBranch[]> {
    let filesSchoolBranch = [];
    for (const createFile of createFilesSchoolBranchDto) {
      const fileSchoolBranch = this.create(createFile);
      await this.save(fileSchoolBranch);
      filesSchoolBranch.push(fileSchoolBranch);
    }

    return filesSchoolBranch;
  }
}
