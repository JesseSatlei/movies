import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Movie } from 'src/modules/movies/entities/movie.entity';
import { User } from 'src/modules/users/entities/user.entity';
require('dotenv').config()

const database_url = process.env.DATABASE_URL || '';

export const typeOrmConfig: TypeOrmModuleOptions = {
    url: database_url,
    type: 'postgres',
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [Movie, User],
    synchronize: true,
    autoLoadEntities: true,
};
