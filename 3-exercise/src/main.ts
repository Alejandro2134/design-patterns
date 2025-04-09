import { NewPaymentSystem } from "./NewPaymentSystem";
import { CreditCard } from "./CreditCard";
import { PaymentAdapter } from "./PaymentAdapter";
import { Paypal } from "./Paypal";

const creditCard = new CreditCard();
const paypal = new Paypal();
const newPaymentSystem = new PaymentAdapter(new NewPaymentSystem());

creditCard.pay(100);
paypal.pay(200);
newPaymentSystem.pay(300);
