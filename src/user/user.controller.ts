import { Body, Controller, Post } from '@nestjs/common';
import { create } from 'domain';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserDto } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService) { }
    
    @Post()
    async create(@Body() user: CreateUserDto) :Promise<UserDto> {
        return this.userService.create(user);
    }
}
