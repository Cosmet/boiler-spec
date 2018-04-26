import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloComponent } from './hello.component';

@Module({
  controllers: [HelloController],
  components: [HelloComponent],
  imports: [],
  // exports: [HelloComponent],
})
export class HelloModule {}
