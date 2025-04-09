import { Subscriber } from "./interface/Subscriber";

export class Phone implements Subscriber {
  update(message: string): void {
    console.log(`Phone received message: ${message}`);
  }
}
