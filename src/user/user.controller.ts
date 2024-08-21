import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async signupUser(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  ): Promise<UserModel> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getUser(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Omit<UserModel, 'password'>> {
    return this.userService.user({ id });
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateUser(
    @Body(new ValidationPipe()) userData: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id },
      data: userData,
    });
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteuser(@Param('id', ParseIntPipe) id: number): Promise<UserModel> {
    return this.userService.deleteUser({ id });
  }
}
