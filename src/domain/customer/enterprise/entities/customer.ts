import {AggregateRoot} from '../../../../core/agregate-root'
export interface CustomerProps {
  name: string;
  //email: Email;
  //cpf: Cpf;
  phone?: string;
  //addresses: Address[];
  createdAt: Date;
  updatedAt: Date;
  status: 'ACTIVE' | 'INACTIVE';
}

export class Customer extends AggregateRoot<CustomerProps> {
  
}