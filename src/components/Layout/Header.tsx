import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Welcome, <span className="text-primary-700">John</span></h1>
        <p className="text-sm text-gray-500">Here's your financial overview</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <input className="px-3 py-2 rounded-xl border border-transparent bg-white/5 glass text-sm" placeholder="Search transactions..." />
        </div>
        <img src="/src/assets/placeholder-avatar.png" alt="avatar" className="w-10 h-10 rounded-full border border-white/20" />
      </div>
    </header>
  );
}
