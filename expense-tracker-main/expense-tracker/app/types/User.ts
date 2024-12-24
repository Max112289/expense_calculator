export interface Bills {
    id: number;
    name: string;
    documentId: string;
    createdAt: Date;
}

export interface PaymentDetails {
    documentId: string;
    date: Date;
    amount: string;
    type: string;
    createdAt: Date;
  }
  
  export interface User {
    id: number;
    documentId: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    email: string;
    photo?: string;
    paymentDetails?: PaymentDetails[];
    bills?: Bills[];
  }