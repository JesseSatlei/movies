import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {

  constructor(
    @InjectRepository(Movie)
    private readonly moviesRepository: Repository<Movie>
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const movie = this.moviesRepository.create(createMovieDto);
    return await this.moviesRepository.save(movie);
  }

  async findAll() {
    return await this.moviesRepository.find();
  }

  async findOne(id: number) {
    return await this.moviesRepository.findOneByOrFail({ id });
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = await this.moviesRepository.findOneByOrFail({ id });
    await this.moviesRepository.update(id, updateMovieDto);
    return this.moviesRepository.findOneBy({id});
  }

  async remove(id: number) {
    const movie = await this.moviesRepository.findOneByOrFail({id});
    return await this.moviesRepository.remove(movie);
  }
}
