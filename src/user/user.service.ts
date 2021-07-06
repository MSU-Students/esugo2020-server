import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserDto } from 'src/dto/user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>) {}
    async create(user: CreateUserDto): Promise<UserDto> {
        return this.userRepository.create(user);
    }
}
