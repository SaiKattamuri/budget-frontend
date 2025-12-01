import React from "react";
import GlassCard from "../components/ui/GlassCard";

export default function Budgets(){
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Budgets</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard>
          <div className="text-sm text-gray-400">Groceries</div>
          <div className="text-lg font-semibold">$300 / $500</div>
        </GlassCard>
        <GlassCard>
          <div className="text-sm text-gray-400">Entertainment</div>
          <div className="text-lg font-semibold">$50 / $200</div>
        </GlassCard>
        <GlassCard>
          <div className="text-sm text-gray-400">Subscriptions</div>
          <div className="text-lg font-semibold">$12 / $20</div>
        </GlassCard>
      </div>
    </div>
  );
}
