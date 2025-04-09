import { Phone } from "./Phone";
import { Notification } from "./Notification";
import { Tablet } from "./Tablet";

const notificationSystem = new Notification();

const phone = new Phone();
const tablet = new Tablet();

console.log("Subscribing phone and tablet...");
notificationSystem.subscribe(phone);
notificationSystem.subscribe(tablet);

notificationSystem.notifySubscribers("Hello, subscribers!");

console.log("Unsubscribing phone...");
notificationSystem.unsubscribe(phone);

notificationSystem.notifySubscribers("Goodbye, subscribers!");
