import { JuniorRoomDecorator } from "./JuniorRoomDecorator";
import { BasicRoom } from "./BasicRoom";
import { SuiteRoomDecorator } from "./SuiteRoomDecorator";

let hotelRoom = new BasicRoom();
console.log("Buying Basic room with this services:");
console.log(hotelRoom.getServices());

hotelRoom = new JuniorRoomDecorator(hotelRoom);
console.log("Upgrading Basic Room to Junior room with this services:");
console.log(hotelRoom.getServices());

hotelRoom = new SuiteRoomDecorator(hotelRoom);
console.log("Upgrading Junior Room to Suite room with this services:");
console.log(hotelRoom.getServices());
