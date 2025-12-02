import React from "react";

export default function BudgetSummary({ periodLabel = "Dec 2025", budget = 50000, spent = 35240 }) {
  const pct = Math.min(100, Math.round((spent / budget) * 100));
  const remaining = budget - spent;
  return (
    <div className="rounded-2xl p-4 bg-white/30 backdrop-blur-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-medium text-slate-700">Budget • {periodLabel}</div>
          <div className="mt-1 text-2xl font-bold text-slate-900">₹{budget.toLocaleString()}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-600">Spent</div>
          <div className="text-lg font-semibold text-slate-900">₹{spent.toLocaleString()}</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full bg-white/40 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"
            style={{ width: `${pct}%`, transition: "width 300ms ease" }}
            aria-valuenow={pct}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <div className="mt-2 flex justify-between text-sm text-slate-700">
          <span className="font-medium">{pct}% used</span>
          <span>{remaining < 0 ? `Over ₹${Math.abs(remaining).toLocaleString()}` : `Remaining ₹${remaining.toLocaleString()}`}</span>
        </div>
      </div>
    </div>
  );
}
