import React from "react";
import GlassCard from "../components/GlassCard";

export default function ReportsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h1 className="text-xl font-semibold mb-2">Reports & Exports</h1>
      <GlassCard>
        <p className="muted text-sm">
          Here we will add controls to export CSV/PDF and schedule monthly reports.
        </p>
      </GlassCard>
    </div>
  );
}