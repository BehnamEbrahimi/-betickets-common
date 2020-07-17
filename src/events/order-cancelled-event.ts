import { Subjects } from "./subjects";

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    // bare minimum data that other services need.
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
