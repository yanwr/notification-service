import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  async getHello(): Promise<any> {
    await this.prisma.notification.create({
      data: {
        category: '',
        content: '',
        id: 'aaaa',
        userId: 'aaa',
      },
    });
    return await this.prisma.notification.findMany();
  }
}
