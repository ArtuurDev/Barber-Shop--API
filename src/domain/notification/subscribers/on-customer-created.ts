import { DomainEvents } from "../../../core/events/domain-events";
import { EventHandler } from "../../../core/events/event-handler";
import { CustomerCreatedEvent } from "../../customer/enterprise/events/customer-created-event";

export class OnCustomerCreated implements EventHandler {
    
    constructor() {
        this.setupSubscriptions()
    }

    setupSubscriptions(): void {
        DomainEvents.register(() => {

        }, CustomerCreatedEvent.name)
    }

}