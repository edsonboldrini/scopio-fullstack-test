import { Customer } from '@/models/Customer'
import { Plan } from '@/models/Plan'
import { PaymentGateway } from '@/models/PaymentGateway'

export class Subscription {
  id: string;
  customer: Customer;
  plan: Plan;
  paymentGateway: PaymentGateway;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  endsAt: Date;
}