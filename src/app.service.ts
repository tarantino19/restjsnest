import { Injectable } from '@nestjs/common';

//app service does most of the heavy lifting functions in the controller
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
