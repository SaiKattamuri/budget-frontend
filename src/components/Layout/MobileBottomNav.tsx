import React from "react";
import { Link } from "react-router-dom";

export default function MobileBottomNav(){
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden">
      <div className="glass p-3 rounded-full flex gap-4 items-center shadow-lg">
        <Link to="/" className="text-sm px-3">Home</Link>
        <Link to="/transactions" className="text-sm px-3">Tx</Link>
        <Link to="/transactions" className="bg-primary-500 text-white px-4 py-2 rounded-full shadow glow">+</Link>
        <Link to="/analytics" className="text-sm px-3">Analytics</Link>
        <Link to="/settings" className="text-sm px-3">Me</Link>
      </div>
    </div>
  );
}
