import React from "react";
import { LineChart as RCLine, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function LineChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <RCLine data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#6ea8ff" strokeWidth={3} dot={false} />
      </RCLine>
    </ResponsiveContainer>
  );
}
