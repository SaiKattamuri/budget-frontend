import { useEffect, useState } from "react";
import api from "../api/client";
import type { Transaction } from "../types";

export function useTransactions() {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetch() {
    setLoading(true);
    try {
      const res = await api.get<Transaction[]>("/transactions");
      setTransactions(res.data);
    } catch (err) {
      setTransactions([
        { id: "t1", date: new Date().toISOString(), amount: 45.2, type: "debit", category: "Food", merchant: "Cafe", notes: "" },
        { id: "t2", date: new Date().toISOString(), amount: 1500, type: "credit", category: "Salary", merchant: "ACME", notes: "" }
      ]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  return { loading, transactions, refresh: fetch, setTransactions };
}
