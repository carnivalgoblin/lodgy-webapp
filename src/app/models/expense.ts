export interface Expense {

  id?: number;
  tripId: number;
  userId: number;
  description?: string;
  amount: number;
  createdAt?: Date | string;
}

