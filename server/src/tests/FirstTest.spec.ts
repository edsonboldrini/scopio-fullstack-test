import { Customer } from "@/models/Customer";

test('Customer is ok', () => {
  const customer = new Customer();

  customer.firstname = 'Edson';

  expect(customer.firstname).toEqual('Edson');
})