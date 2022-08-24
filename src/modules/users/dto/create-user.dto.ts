import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @IsString()
    @ApiProperty({ type: String })
    name: string;

    @IsString()
    @ApiProperty({ type: String })
    password: string;
}
