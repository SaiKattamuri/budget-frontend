import React from "react";

export default function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`glass p-4 ${className}`}>{children}</div>;
}
