import { UniqueEntityId } from "../../../../core/unique-entity-id";
import {Entity} from '../../../../core/entity'

export interface AddressProps {
  customerId: string
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export class Address extends Entity<AddressProps> {
  constructor(props: AddressProps, id: UniqueEntityId) {
    super(props, id)
  }

  get street() {
    return this.props.street
  }

  get city() {
    return this.props.city
  }

  get zipCode() {
    return this.props.zipCode
  }

}
