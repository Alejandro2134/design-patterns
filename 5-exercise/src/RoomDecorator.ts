import { Room } from "./interfaces/Room";

export class RoomDecorator implements Room {
  private wrappee: Room;

  constructor(wrappee: Room) {
    this.wrappee = wrappee;
  }

  getServices(): string[] {
    return this.wrappee.getServices();
  }
}
