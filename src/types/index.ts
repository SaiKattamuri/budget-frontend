export type Transaction = {
  id: string;
  date: string;
  amount: number;
  type: "credit" | "debit";
  category: string;
  merchant?: string;
  notes?: string;
};

export type Budget = {
  id: string;
  month: string;
  category: string;
  limit: number;
  spent?: number;
};
