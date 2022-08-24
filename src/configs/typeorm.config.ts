import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Movie } from 'src/modules/movies/entities/movie.entity';
import { User } from 'src/modules/users/entities/user.entity';

const database_url = 'postgres://peurwpubzsysyc:045b3b45e588d2b35a14bf06e22e302c4ff89c92c5c14b162e4db6f01e5af907@ec2-34-227-135-211.compute-1.amazonaws.com:5432/d1ogth0sehofqe';

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
