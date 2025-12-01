import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MobileBottomNav from "./MobileBottomNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[radial-gradient(1200px_600px_at_10%_20%,rgba(124,92,255,0.03),transparent),radial-gradient(800px_400px_at_90%_80%,rgba(110,168,255,0.02),transparent)]">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <main className="mt-6">{children}</main>
      </div>
      <MobileBottomNav />
    </div>
  );
}
