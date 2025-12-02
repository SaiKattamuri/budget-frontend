import React from "react";
import GlassCard from "../components/GlassCard";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h1 className="text-xl font-semibold mb-2">Settings</h1>
      <GlassCard>
        <p className="muted text-sm">
          Profile, currency, and notification preferences will go here.
        </p>
      </GlassCard>
    </div>
  );
}