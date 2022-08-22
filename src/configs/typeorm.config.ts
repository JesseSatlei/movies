import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Movie } from 'src/modules/movies/entities/movie.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: "user",
    password: "password",
    database: "db",
    entities: [Movie],
    synchronize: true,
};