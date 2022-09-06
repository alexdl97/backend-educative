import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "src/config/config.module";
import { ConfigService } from "src/config/config.service";
import { ConnectionOptions } from "typeorm";

export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (config: ConfigService) => {
            return {
                type: config.ENVIROMENT.DB_CONNECTION,
                host: config.ENVIROMENT.DB_HOST,
                port: config.ENVIROMENT.DB_PORT,
                username: config.ENVIROMENT.DB_USERNAME,
                password: config.ENVIROMENT.DB_PASSWORD,
                database: config.ENVIROMENT.DB_DATABASE,
                // autoLoadEntities: true,
                // synchronize: true,
                // entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
                entities: [
                    __dirname + '/../modules/**/*.entity{.ts,.js}',
                    __dirname + '/../modules/**/entities/*.entity{.ts,.js}',
                ],
                // migration: [__dirname +cls '/migrations/*{.ts,.js}']
            } as ConnectionOptions;
        }
    })
];