import { Payment } from "./interfaces/Payment";

export class CreditCard implements Payment {
  public pay(amount: number) {
    console.log("Paying with credit card " + amount);
  }
}
