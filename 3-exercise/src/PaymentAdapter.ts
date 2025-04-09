import { Payment } from "./interfaces/Payment";
import { NewPaymentSystem } from "./NewPaymentSystem";

export class PaymentAdapter implements Payment {
  private adaptee: NewPaymentSystem;

  constructor(paymentSystem: NewPaymentSystem) {
    this.adaptee = paymentSystem;
  }

  public pay(amount: number) {
    this.adaptee.pay(amount.toString());
  }
}
