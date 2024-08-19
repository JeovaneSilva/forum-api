import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    @Inject()
    private readonly authSertvice: AuthService;

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    signin(@Body() body: Prisma.UserCreateInput) {
        return this.authSertvice.signin(body)
    }
}
