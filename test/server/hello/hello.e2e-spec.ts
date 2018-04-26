import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { HelloModule } from '../../../src/server/hello/hello.module';

describe('Hello (e2e)', () => {
  let hello: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [HelloModule],
    }).compile();

    hello = moduleFixture.createNestApplication();
    await hello.init();
  });

  it('/GET /', () => {
    return request(hello.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello Specless!');
  });
});
