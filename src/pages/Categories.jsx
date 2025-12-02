import React, { useEffect, useState } from "react";
import GlassCard from "../components/GlassCard";
import { getCategories } from "../lib/api";

export default function CategoriesPage() {
  const [cats, setCats] = useState([]);

  useEffect(()=> {
    getCategories().then(setCats).catch(console.error);
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h1 className="text-xl font-semibold mb-2">Categories</h1>
      <GlassCard>
        {cats.length === 0 ? (
          <div className="muted">No categories yet. Add from backend or via future UI.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cats.map(c => (
              <div key={c.id} className="p-3 rounded bg-white/5">
                <div className="text-sm font-semibold">{c.name}</div>
                <div className="muted text-xs mt-1">Type: {c.type || "n/a"}</div>
              </div>
            ))}
          </div>
        )}
      </GlassCard>
    </div>
  );
}