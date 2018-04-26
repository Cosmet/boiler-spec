import { Get, Controller } from '@nestjs/common';
import { HelloComponent } from './hello.component';

@Controller('/hello')
export class HelloController {
  constructor (private readonly helloComponent: HelloComponent) {}

  @Get()
  public sayHello (name: string = 'Specless'): string {
    return this.helloComponent.sayHello(name);
  }
}
