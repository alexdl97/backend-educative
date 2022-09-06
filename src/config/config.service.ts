require('dotenv').config();

export class ConfigService {

    public readonly ENVIROMENT: { 
        NODE_ENV: string,
        PORT: string,
        DB_CONNECTION: string,
        DB_HOST: string,
        DB_USERNAME: string,
        DB_PASSWORD: string,
        DB_DATABASE: string,
        DB_PORT: string,
        DB_SYNCHRONIZE: Boolean,
        GOOGLE_OAUTH_CLIENT_ID: string,
        FACEBOOK_APP_TOKEN: string,
        FACEBOOK_APP_KEY_SECRET: string,
        FACEBOOK_APP_ID: string,
        FACEBOOK_URL_DEBUG_TOKEN: string,
        // DB_ENTITIES: string,
        // DB_MIGRATIONS: string,
    };

    constructor() {
        const isProduction = process.env.NODE_ENV == 'prod';

        if (isProduction) {
            this.ENVIROMENT = {
                NODE_ENV: process.env.NODE_ENV,
                PORT: process.env.PORT,
                DB_CONNECTION: process.env.DB_CONNECTION,
                DB_HOST: process.env.DB_HOST,
                DB_USERNAME: process.env.DB_USERNAME,
                DB_PASSWORD: process.env.DB_PASSWORD,
                DB_DATABASE: process.env.DB_DATABASE,
                DB_PORT: process.env.DB_PORT,
                DB_SYNCHRONIZE: Boolean(process.env.DB_SYNCHRONIZE),
                GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
                FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
                FACEBOOK_APP_TOKEN: process.env.FACEBOOK_APP_TOKEN,
                FACEBOOK_APP_KEY_SECRET: process.env.FACEBOOK_APP_KEY_SECRET,
                FACEBOOK_URL_DEBUG_TOKEN: process.env.FACEBOOK_URL_DEBUG_TOKEN,
                // DB_ENTITIES: process.env.DB_ENTITIES,
                // DB_MIGRATIONS: process.env.DB_MIGRATIONS,
            };
        } else {
            this.ENVIROMENT = {
                NODE_ENV: process.env.NODE_ENV,
                PORT: process.env.PORT,
                DB_CONNECTION: process.env.DB_CONNECTION_DEV,
                DB_HOST: process.env.DB_HOST_DEV,
                DB_USERNAME: process.env.DB_USERNAME_DEV,
                DB_PASSWORD: process.env.DB_PASSWORD_DEV,
                DB_DATABASE: process.env.DB_DATABASE_DEV,
                DB_PORT: process.env.DB_PORT_DEV,
                DB_SYNCHRONIZE: Boolean(process.env.DB_SYNCHRONIZE_DEV),
                GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
                FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
                FACEBOOK_APP_TOKEN: process.env.FACEBOOK_APP_TOKEN,
                FACEBOOK_APP_KEY_SECRET: process.env.FACEBOOK_APP_KEY_SECRET,
                FACEBOOK_URL_DEBUG_TOKEN: process.env.FACEBOOK_URL_DEBUG_TOKEN,
                // DB_ENTITIES: process.env.DB_ENTITIES_DEV,
                // DB_MIGRATIONS: process.env.DB_MIGRATIONS_DEV,
            };
        }
    }

}
