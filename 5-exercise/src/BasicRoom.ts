import { Room } from "./interfaces/Room";

export class BasicRoom implements Room {
  getServices(): string[] {
    return ["bed", "bath"];
  }
}
