import React from "react";

export default function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent text-white font-semibold glow">
      {children}
    </button>
  );
}
