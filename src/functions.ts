import { SayHello } from "./types";

export function sayhello({ name }: SayHello): void {
  console.log(`Hello ${name}!`);
}
