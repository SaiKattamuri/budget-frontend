import React from "react";

export default function TransactionList({ transactions = [], categories = [], onRefresh }) {
  const catMap = {};
  categories.forEach(c => catMap[c.id] = c.name);

  if (!transactions.length) {
    return <div className="muted">No transactions yet. Add your first transaction.</div>
  }

  return (
    <div className="space-y-3">
      {transactions.map(tx => (
        <div key={tx.id} className="flex items-center justify-between p-2 rounded hover:bg-white/2">
          <div>
            <div className="text-sm font-medium">{tx.notes || "—"}</div>
            <div className="muted text-xs">{new Date(tx.date).toLocaleDateString()} · {catMap[tx.category_id] || "Uncategorized"}</div>
          </div>
          <div className={tx.type === "credit" ? "text-green-300 font-semibold" : "text-rose-300 font-semibold"}>
            {tx.type === "credit" ? "+" : "-"} ₹ {Number(tx.amount).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  )
}