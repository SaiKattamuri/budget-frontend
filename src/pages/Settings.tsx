import React from "react";
import GlassCard from "../components/ui/GlassCard";

export default function Settings(){
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <GlassCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-gray-400">Full name</label>
            <input placeholder="John Doe" className="w-full p-2 rounded-md bg-white/5 border border-white/10 mt-1" />
          </div>
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input placeholder="john@example.com" className="w-full p-2 rounded-md bg-white/5 border border-white/10 mt-1" />
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
