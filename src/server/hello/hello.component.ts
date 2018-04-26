import { Component } from '@nestjs/common';

@Component()
export class HelloComponent {
  public sayHello (input: string): string {
    return `Hello ${input}!`;
  }
}
