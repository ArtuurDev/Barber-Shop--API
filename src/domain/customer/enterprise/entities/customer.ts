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