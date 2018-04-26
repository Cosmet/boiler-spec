import { NestFactory } from '@nestjs/core';
import * as path from 'path';
import express from 'express';
import { AppModule } from './app.module';

async function bootstrap () {
  const app = await NestFactory.create(AppModule);

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  await app.listen(3000);
}

bootstrap();
