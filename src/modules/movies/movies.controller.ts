import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('movies')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiTags('Filmes')
  async create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiTags('Filmes')
  async findAll() {
    return await this.moviesService.findAll();
  }

  @Get(':id')
  @ApiTags('Filmes')
  async findOne(@Param('id') id: string) {
    return await this.moviesService.findOne(+id);
  }

  @Patch(':id')
  @ApiTags('Filmes')
  async update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return await this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  @ApiTags('Filmes')
  async remove(@Param('id') id: string) {
    return await this.moviesService.remove(+id);
  }
}
