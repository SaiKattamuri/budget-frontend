import React from "react";
import GlassCard from "../components/ui/GlassCard";
import TransactionList from "../components/transactions/TransactionList";
import { useTransactions } from "../hooks/useTransactions";
import AddTransactionModal from "../components/transactions/AddTransactionModal";

export default function Transactions(){
  const { transactions, setTransactions } = useTransactions();

  function add(t:any){
    setTransactions(prev => [t, ...prev]);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <AddTransactionModal onAdd={add} />
      </div>
      <GlassCard>
        <TransactionList items={transactions} />
      </GlassCard>
    </div>
  );
}
