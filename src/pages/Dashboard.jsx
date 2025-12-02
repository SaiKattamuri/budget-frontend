import React from "react";
import GlassCard from "../components/GlassCard";

const mockArea = [
  { date: "2025-11-01", income: 6000, expense: 3200 },
  { date: "2025-11-02", income: 4000, expense: 2800 }
];

export default function Dashboard(){
  return (
    <main className="p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <GlassCard title="Net Balance" subtitle="This month">
            <div className="text-3xl kpi">₹ 12,345</div>
            <div className="muted text-sm mt-1">Income − Expense</div>
          </GlassCard>
          <GlassCard title="Income" subtitle="Monthly">
            <div className="text-2xl kpi">₹ 45,000</div>
            <div className="muted text-sm mt-1">Total income this month</div>
          </GlassCard>
          <GlassCard title="Expense" subtitle="Monthly">
            <div className="text-2xl kpi">₹ 32,655</div>
            <div className="muted text-sm mt-1">Total expense this month</div>
          </GlassCard>
          <GlassCard title="Savings Rate" subtitle="Monthly">
            <div className="text-2xl kpi">27%</div>
            <div className="muted text-sm mt-1">Savings %</div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <GlassCard className="lg:col-span-2" title="Monthly Trend" subtitle="Income vs Expense">
            <div className="h-48 flex items-center justify-center muted">[Chart placeholder]</div>
          </GlassCard>

          <GlassCard title="Top Categories" subtitle="This month">
            <div className="h-48 flex items-center justify-center muted">[Pie chart placeholder]</div>
          </GlassCard>
        </div>

        <div className="mt-6">
          <GlassCard title="Recent Transactions">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Dinner at The Dosa Place</div>
                  <div className="muted text-xs">Nov 29, 2025 · Dining</div>
                </div>
                <div className="text-sm font-semibold">- ₹ 450</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </main>
  )
}