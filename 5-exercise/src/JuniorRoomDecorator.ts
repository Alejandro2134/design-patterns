import { RoomDecorator } from "./RoomDecorator";

export class JuniorRoomDecorator extends RoomDecorator {
  getServices(): string[] {
    return [...super.getServices(), "kitchenette"];
  }
}
