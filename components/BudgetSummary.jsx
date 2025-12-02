import React from "react";

export default function BudgetSummary({ periodLabel = "Dec 2025", budget = 50000, spent = 35240 }) {
  const pct = Math.min(100, Math.round((spent / budget) * 100));
  const remaining = budget - spent;
  return (
    <div className="rounded-2xl p-4 shadow-md bg-white">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-medium text-gray-500">Budget • {periodLabel}</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">₹{budget.toLocaleString()}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Spent</div>
          <div className="text-lg font-medium text-gray-900">₹{spent.toLocaleString()}</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 rounded-full bg-blue-600"
            style={{ width: `${pct}%`, transition: "width 300ms ease" }}
            aria-valuenow={pct}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>{pct}% used</span>
          <span>{remaining < 0 ? `Over ₹${Math.abs(remaining).toLocaleString()}` : `Remaining ₹${remaining.toLocaleString()}`}</span>
        </div>
      </div>
    </div>
  );
}
