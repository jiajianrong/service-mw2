import { Controller, Get, Provide, Plugin } from '@midwayjs/decorator';
import { CreateApiDoc } from '@midwayjs/swagger';
import { Jwt } from '@waiting/egg-jwt';
import { Context } from 'egg';

@Provide()
@Controller('/')
export class HomeController {
  @Plugin()
  jwt: Jwt;

  @(CreateApiDoc().summary('获取主页').description('需要鉴权').build())
  @Get('/')
  async home() {
    return 'Hello Midwayjs!';
  }

  @(CreateApiDoc().summary('检查连通性').description('不需要鉴权').build())
  @Get('/ping')
  async ping(ctx: Context) {
    ctx.body = 'OK';
  }
}
