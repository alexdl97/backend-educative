import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PruebaModule } from './modules/prueba/prueba.module';
import { UserModule } from './modules/users/user.module';
import { DatabaseModule } from './database/database.module';
import { SchoolsModule } from './modules/schools/schools.module';
import { CityModule } from './modules/city/city.module';
import { SharedModule } from './shared/shared.module';
import { SchoolTypeController } from './modules/school-type/school-type.controller';
import { SchoolTypeModule } from './modules/school-type/school-type.module';
import { ReferencesModule } from './modules/references/references.module';
import { SocialMediaModule } from './modules/social-media/social-media.module';
import { LocationModule } from './modules/location/location.module';
import { EducationTypeModule } from './modules/education-type/education-type.module';
import { CharacteristicModule } from './modules/characteristic/characteristic.module';
import { GradeModule } from './modules/grade/grade.module';
import { LevelModule } from './modules/level/level.module';
import { ServiceModule } from './modules/service/service.module';
import { RequerimentTypeModule } from './modules/requeriment-type/requeriment-type.module';
import { HomeModule } from './modules/home/home.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RatingModule } from './modules/rating/rating.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'db_sutus',
      autoLoadEntities: true,
      synchronize: true,
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
        __dirname + '/**/entities/*.entity{.ts,.js}',
      ],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    // DatabaseModule,
    ConfigModule,
    AuthModule,
    PruebaModule,
    UserModule,
    SchoolsModule,
    CityModule,
    SharedModule,
    SchoolTypeModule,
    ReferencesModule,
    SocialMediaModule,
    LocationModule,
    EducationTypeModule,
    CharacteristicModule,
    GradeModule,
    LevelModule,
    ServiceModule,
    RequerimentTypeModule,
    HomeModule,
    RatingModule,
  ],
  controllers: [
    AppController,
    SchoolTypeController,
  ],
  providers: [  
    AppService,
  ],
})
export class AppModule {
  static port: number | string;
  port = 3000;
  // constructor(private readonly _configService: ConfigService) {
  //   AppModule.port = this._configService.ENVIROMENT.PORT
  // }
}
