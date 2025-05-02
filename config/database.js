const dbType = process.env.DB_CONNECTION || "postgres";

const databaseConfig = {
    type: dbType,
    postgres: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    },
    mysql: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    },
    sqlite: {
        database: process.env.DB_DATABASE,
    },
    mongodb: {
        uri: process.env.MONGODB_URI,
    },
};

export default databaseConfig;
