import { Controller, Get, Post, Req ,Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(){
    return this.appService.getUser();
  }

  @Post('user')
  async createUser(@Req() req:Request ,  @Res({ passthrough: true }) res:Response){
    
    const result= await this.appService.createUser( req.body );
    //console.log('RES ',result);
    res.send(result);
  }
}
