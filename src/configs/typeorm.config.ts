import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Movie } from 'src/modules/movies/entities/movie.entity';
import { User } from 'src/modules/users/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: "user",
    password: "password",
    database: "db",
    entities: [Movie, User],
    synchronize: true,
};