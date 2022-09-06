import { Controller, Get, Post, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { configDisk, fileFilter } from 'src/common/helpers/functions-aux.helper';
import { User } from '../users/user.entity';

@Controller('prueba')
@UseGuards(AuthGuard())
export class PruebaController {

    @Get('test')
    getTests(@GetUser() user: User ): { name: string, lastname: string } {
        // console.log(user);
        return {
            name: 'Alex',
            lastname: 'Dominguez'
        };
    }

    @Post('upload')
    @UseInterceptors(AnyFilesInterceptor())
    async uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
        console.log(files);
    }

}
