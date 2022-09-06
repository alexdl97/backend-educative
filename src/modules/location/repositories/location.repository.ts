import { EntityRepository, Repository } from 'typeorm';
import { createLocationDto } from '../dto/create-location.dto';
import { Location } from '../entities/location.entity';

@EntityRepository(Location)
export class LocationRepository extends Repository<Location> {
  async storeLocation(createLocationDto: createLocationDto): Promise<Location> {
    const { address, latitude, longitude } = createLocationDto;
    const location = this.create({
      address,
      latitude,
      longitude,
    });
    await this.save(location);
    return location;
  }
}
