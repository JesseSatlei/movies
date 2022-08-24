import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { compareSync } from 'bcrypt';
import { User } from 'src/modules/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ){}

  async validateUser(name: string, password: string) {

    let user: User;
    try {
      user = await this.usersService.findOneByName(name);
    } catch (error) {
      return null;
    }

    const isPassword = compareSync(password, user.password);

    if (!isPassword) {
      return null;
    }

    return user;
  }

  async login(user) {
    const payload = { sub: user.id };

    return {
      token: this.jwtService.sign(payload)
    }
  }

}
