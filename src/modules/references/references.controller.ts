import { Body, Controller, Post } from '@nestjs/common';
import { CreateReferenceDto } from './dto/create-reference.dto';

@Controller('references')
export class ReferencesController {

    @Post()
    createReference(@Body() createReference: CreateReferenceDto) {
        console.log(createReference);
    }

}
