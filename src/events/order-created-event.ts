import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    // actually status is not needed by other service in this event, we future-proof ourselves by sharing maximum data.
    id: string;
    version: number;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
