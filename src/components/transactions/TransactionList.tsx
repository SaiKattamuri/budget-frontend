import React from "react";
import type { Transaction } from "../../types";

export default function TransactionList({ items }: { items: Transaction[] }) {
  return (
    <div className="space-y-3">
      {items.map((t) => (
        <div key={t.id} className="glass p-3 flex justify-between items-center">
          <div>
            <div className="font-medium">{t.merchant ?? t.category}</div>
            <div className="text-xs text-gray-500">{new Date(t.date).toLocaleDateString()} · {t.category}</div>
          </div>
          <div className={`${t.type === "debit" ? "text-red-400" : "text-green-400"} font-semibold`}>
            {t.type === "debit" ? "-" : "+"}${Math.abs(t.amount).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
}
