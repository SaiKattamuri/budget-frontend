import React from "react";
import GlassCard from "../components/GlassCard";

export default function SuggestionsPage() {
  const mock = [
    { id: 1, text: "You spent ₹8,500 on Dining this month. Try limiting to ₹5,000." },
    { id: 2, text: "Transport costs are up 30% vs last month." }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h1 className="text-xl font-semibold mb-2">Suggestions</h1>
      <GlassCard>
        <div className="space-y-2">
          {mock.map(s => (
            <div key={s.id} className="p-3 rounded bg-white/5 text-sm">
              {s.text}
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}