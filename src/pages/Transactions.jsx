import React, { useEffect, useState } from "react";
import GlassCard from "../components/GlassCard";
import { getTransactions, getCategories } from "../lib/api";
import TransactionList from "../components/TransactionList";

export default function TransactionsPage() {
  const [txs, setTxs] = useState([]);
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const [t, c] = await Promise.all([getTransactions(), getCategories()]);
      setTxs(t);
      setCats(c);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{ load(); }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-4">
      <h1 className="text-xl font-semibold mb-2">Transactions</h1>
      <GlassCard>
        {loading ? <div className="muted">Loading...</div> :
          <TransactionList transactions={txs} categories={cats} onRefresh={load} />
        }
      </GlassCard>
    </div>
  );
}