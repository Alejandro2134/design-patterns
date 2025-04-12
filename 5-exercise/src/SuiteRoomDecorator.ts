import { RoomDecorator } from "./RoomDecorator";

export class SuiteRoomDecorator extends RoomDecorator {
  getServices(): string[] {
    return [...super.getServices(), "living room"];
  }
}
