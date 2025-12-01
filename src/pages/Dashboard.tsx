import React from "react";
import GlassCard from "../components/ui/GlassCard";
import DonutChart from "../components/charts/DonutChart";
import LineChart from "../components/charts/LineChart";
import { useTransactions } from "../hooks/useTransactions";
import TransactionList from "../components/transactions/TransactionList";
import AddTransactionModal from "../components/transactions/AddTransactionModal";

export default function Dashboard(){
  const { transactions, refresh, setTransactions } = useTransactions();

  function handleAdd(t: any) {
    setTransactions(prev => [t, ...prev]);
  }

  const donutData = [
    { name: "Food", value: 500 },
    { name: "Shopping", value: 1200 },
    { name: "Subs", value: 300 }
  ];
  const lineData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 600 },
    { name: "Mar", value: 700 },
    { name: "Apr", value: 500 }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard className="col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold">Overview</h3>
          <div className="mt-4 flex gap-4 items-center">
            <div className="flex-1">
              <div className="text-sm text-gray-400">Total balance</div>
              <div className="text-3xl font-bold">$13,480.50</div>
            </div>
            <div style={{width:260}}>
              <DonutChart data={donutData} />
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h4 className="font-semibold">Recent</h4>
          <div className="mt-3">
            <TransactionList items={transactions} />
            <div className="mt-4">
              <AddTransactionModal onAdd={handleAdd} />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="md:col-span-3 mt-4">
          <h4 className="font-semibold">Cashflow (last months)</h4>
          <LineChart data={lineData} />
        </GlassCard>
      </div>
    </>
  );
}
