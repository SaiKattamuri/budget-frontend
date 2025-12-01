import React from "react";
import GlassCard from "../components/ui/GlassCard";
import LineChart from "../components/charts/LineChart";

const sample = [
  { name: "Jan", value: 200 },
  { name: "Feb", value: 400 },
  { name: "Mar", value: 350 },
  { name: "Apr", value: 600 }
];

export default function Analytics(){
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
      <GlassCard>
        <LineChart data={sample} />
      </GlassCard>
    </div>
  );
}
