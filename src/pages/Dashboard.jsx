import React, { useEffect, useState } from "react";
import GlassCard from "../components/GlassCard";
import { LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { getTransactions, getCategories, postTransaction } from "../lib/api";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../components/TransactionForm";

const COLORS = ["#7AE7C7", "#73C2FF", "#FFD27A", "#FF7A7A", "#C48CFF"];

function aggregateMonthly(data) {
  const map = {};
  data.forEach((t) => {
    const date = new Date(t.date).toISOString().slice(0,10);
    if (!map[date]) map[date] = { date, income: 0, expense: 0 };
    if (t.type === "credit") map[date].income += Number(t.amount);
    else map[date].expense += Number(t.amount);
  });
  return Object.values(map).sort((a,b)=> a.date.localeCompare(b.date));
}

function aggregateCategories(data, categories) {
  const catMap = {};
  categories.forEach(c => (catMap[c.id] = { name: c.name, value: 0 }));
  data.forEach(t => {
    const id = t.category_id;
    if (id && catMap[id]) catMap[id].value += Number(t.amount);
  });
  return Object.values(catMap).sort((a,b)=> b.value - a.value).slice(0,5);
}

export default function Dashboard(){
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const [txs, cats] = await Promise.all([getTransactions(), getCategories()]);
      setTransactions(txs);
      setCategories(cats);
    } catch (e) {
      console.error("Failed load", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{ load(); }, []);

  const monthly = aggregateMonthly(transactions);
  const topCats = aggregateCategories(transactions, categories);
  const totalIncome = monthly.reduce((s, d) => s + (d.income||0), 0);
  const totalExpense = monthly.reduce((s, d) => s + (d.expense||0), 0);
  const net = totalIncome - totalExpense;
  const savingsRate = totalIncome ? Math.round(((totalIncome - totalExpense)/totalIncome)*100) : 0;

  async function handleAdd(tx) {
    await postTransaction(tx);
    setShowAdd(false);
    await load();
  }

  return (
    <main className="p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Budget Dashboard</h1>
          <div>
            <button onClick={()=>setShowAdd(true)} className="px-4 py-2 rounded-2xl bg-primary text-black font-semibold">Add Transaction</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <GlassCard title="Net Balance" subtitle="This month">
            <div className="text-3xl kpi">₹ {net.toLocaleString()}</div>
            <div className="muted text-sm mt-1">Income − Expense</div>
          </GlassCard>
          <GlassCard title="Income" subtitle="Monthly">
            <div className="text-2xl kpi">₹ {totalIncome.toLocaleString()}</div>
            <div className="muted text-sm mt-1">Total income this month</div>
          </GlassCard>
          <GlassCard title="Expense" subtitle="Monthly">
            <div className="text-2xl kpi">₹ {totalExpense.toLocaleString()}</div>
            <div className="muted text-sm mt-1">Total expense this month</div>
          </GlassCard>
          <GlassCard title="Savings Rate" subtitle="Monthly">
            <div className="text-2xl kpi">{savingsRate}%</div>
            <div className="muted text-sm mt-1">Savings %</div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <GlassCard className="lg:col-span-2" title="Monthly Trend" subtitle="Income vs Expense">
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthly}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2}/>
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="income" stroke="#7AE7C7" strokeWidth={2} />
                  <Line type="monotone" dataKey="expense" stroke="#FF7A7A" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <GlassCard title="Top Categories" subtitle="This month">
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={topCats} dataKey="value" nameKey="name" innerRadius={40} outerRadius={80} label>
                    {topCats.map((entry, idx) => (
                      <Cell key={`c-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>

        <div className="mt-6">
          <GlassCard title="Recent Transactions">
            {loading ? <div className="muted">Loading...</div> :
              <TransactionList transactions={transactions} categories={categories} onRefresh={load} />
            }
          </GlassCard>
        </div>
      </div>

      {showAdd && <TransactionForm categories={categories} onCancel={()=>setShowAdd(false)} onSave={handleAdd} />}
    </main>
  )
}