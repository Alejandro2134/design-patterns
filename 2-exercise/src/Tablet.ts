import { Subscriber } from "./interface/Subscriber";

export class Tablet implements Subscriber {
  update(message: string): void {
    console.log(`Tablet received message: ${message}`);
  }
}
