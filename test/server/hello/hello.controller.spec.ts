import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { HelloController } from '../../../src/server/hello/hello.controller';
import { HelloComponent } from '../../../src/server/hello/hello.component';

describe('HelloController', () => {
  let helloController: HelloController;
  let helloComponent: HelloComponent;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [HelloController],
      components: [HelloComponent],
    }).compile();

    helloComponent = module.get<HelloComponent>(HelloComponent);
    helloController = module.get<HelloController>(HelloController);
  });

  describe('sayHello', () => {
    it('should return "Hello Specless!"', () => {
      const input = 'Specless';
      const result = `Hello ${input}`;
      jest.spyOn(helloComponent, 'sayHello').mockImplementation(() => result);
      expect(helloController.sayHello(input)).toBe(result);
    });
  });
});
