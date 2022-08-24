import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const movie = this.userRepository.create(createUserDto);
    return await this.userRepository.save(movie);
  }

  async findAll() {
    return await this.userRepository.find({
      select: ['id', 'name']
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOneByOrFail({ id });
  }

  async findOneByName(name: string) {
    return await this.userRepository.findOneByOrFail({ name });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const movie = await this.userRepository.findOneByOrFail({ id });
    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOneBy({id});
  }

  async remove(id: number) {
    const movie = await this.userRepository.findOneByOrFail({id});
    return await this.userRepository.remove(movie);
  }
}
