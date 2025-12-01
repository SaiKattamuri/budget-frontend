import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function DonutChart({ data }: { data: { name: string; value: number }[] }) {
  const colors = ["#6ea8ff", "#7c5cff", "#43d8c9", "#ffd166"];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie data={data} dataKey="value" innerRadius={60} outerRadius={90} paddingAngle={4}>
          {data.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} />)}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
