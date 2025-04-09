import { Payment } from "./interfaces/Payment";

export class Paypal implements Payment {
  public pay(amount: number) {
    console.log("Paying with Paypal " + amount);
  }
}
