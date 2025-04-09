import { Subscriber } from "./interface/Subscriber";

export class Notification {
  private subscribers: Subscriber[];

  constructor() {
    this.subscribers = [];
  }

  public subscribe(s: Subscriber) {
    this.subscribers.push(s);
  }

  public unsubscribe(s: Subscriber) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== s
    );
  }

  public notifySubscribers(message: string) {
    this.subscribers.forEach((s) => {
      s.update(message);
    });
  }
}
