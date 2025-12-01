import React from "react";
import { NavLink } from "react-router-dom";

const items = [
  { to: "/", label: "Dashboard" },
  { to: "/transactions", label: "Transactions" },
  { to: "/budgets", label: "Budgets" },
  { to: "/analytics", label: "Analytics" },
  { to: "/settings", label: "Settings" }
];

export default function Sidebar(){
  return (
    <aside className="hidden md:flex flex-col w-72 p-6 border-r border-white/6">
      <div className="mb-6">
        <div className="text-xl font-bold">BudgetApp</div>
        <div className="text-xs text-gray-400 mt-1">Glass UI · Responsive</div>
      </div>
      <nav className="flex-1">
        {items.map(i => (
          <NavLink
            key={i.to}
            to={i.to}
            className={({isActive}) => `block px-3 py-2 rounded-md mb-2 ${isActive ? "bg-white/6" : "hover:bg-white/3"}`}
          >
            {i.label}
          </NavLink>
        ))}
      </nav>
      <div className="text-xs text-gray-400 mt-6">v0.1.0</div>
    </aside>
  );
}
