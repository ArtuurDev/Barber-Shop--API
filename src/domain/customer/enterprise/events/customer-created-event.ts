import {DomainEvent} from '../../../../core/events/domain-event'
import { UniqueEntityId } from '../../../../core/unique-entity-id';
import { Customer } from '../entities/customer';

export class CustomerCreatedEvent implements DomainEvent {
    ocurredAt: Date;
    customer: Customer


    getAggregateId(): UniqueEntityId {
        return this.customer.id
    }

    constructor(customer: Customer) {
        this.ocurredAt = new Date()
        this.customer = customer
    }

}