import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.module/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getUser() {

      return await this.prisma.user.findMany();

  }

  async createUser( dto ){

    return await this.prisma.user.create({
       data:{
         email:dto.email,
         mood:dto.mood
       }
    })
  
  }
  getHello(): string {
    return 'Hello World!';
  }
}
