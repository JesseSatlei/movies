import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('Users Service', () => {
    let userService: UsersService;
    let userRepository: Repository<User>;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                UsersService,
                {
                    provide: getRepositoryToken(User),
                    useClass: Repository
                }
            ]
        }).compile();

        userService = moduleRef.get<UsersService>(UsersService);
        userRepository = moduleRef.get<Repository<User>>(getRepositoryToken(User));
    });

    describe('findAll', () => {
        it('should return all', async() => {
            const result = {
                "createdAt": "",
                "deletedAt": "",
                "hashPassword": () => {},
                "id": 1,
                "name": "teste",
                "password": "teste",
                "updatedAt": "",
            }


            jest.spyOn(userRepository, 'find').mockResolvedValue([result]);

            expect(await userService.findAll()).toStrictEqual([result]);
        })
    })
});
