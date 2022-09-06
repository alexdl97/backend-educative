import { Controller, Get } from '@nestjs/common';
import { SchoolsService } from '../schools/schools.service';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {

    constructor(private homeService: HomeService){}

    @Get()
    getHomeData() {
        return this.homeService.getDataHome();
    }

}
