import React from "react";
import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import TransactionsPage from "./pages/Transactions";
import CategoriesPage from "./pages/Categories";
import SuggestionsPage from "./pages/Suggestions";
import ReportsPage from "./pages/Reports";
import SettingsPage from "./pages/Settings";

function Layout({ children }) {
  const location = useLocation();
  const active = (path) =>
    location.pathname.startsWith(path) ? "bg-white/10" : "bg-transparent";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07111A] to-[#041018] text-[#E6F0F6] flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 px-4 py-6 border-r border-white/10 bg-black/20 backdrop-blur">
        <div className="text-lg font-semibold mb-6">💸 Budget Tracker</div>
        <nav className="space-y-1 text-sm">
          <Link to="/dashboard" className={`block px-3 py-2 rounded-2xl ${active("/dashboard")}`}>
            Dashboard
          </Link>
          <Link to="/transactions" className={`block px-3 py-2 rounded-2xl ${active("/transactions")}`}>
            Transactions
          </Link>
          <Link to="/categories" className={`block px-3 py-2 rounded-2xl ${active("/categories")}`}>
            Categories
          </Link>
          <Link to="/suggestions" className={`block px-3 py-2 rounded-2xl ${active("/suggestions")}`}>
            Suggestions
          </Link>
          <Link to="/reports" className={`block px-3 py-2 rounded-2xl ${active("/reports")}`}>
            Reports
          </Link>
          <Link to="/settings" className={`block px-3 py-2 rounded-2xl ${active("/settings")}`}>
            Settings
          </Link>
        </nav>
        <div className="mt-auto text-xs text-white/50">
          <Link to="/login" className="underline">
            Logout
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-white/10 bg-black/10 backdrop-blur">
          <div className="md:hidden font-semibold">💸 Budget Tracker</div>
          <div className="text-xs md:text-sm text-white/70">
            DevSecOps Training · Budget App
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-white/60">sai nath</div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">
              SN
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* Authenticated layout (for now no real auth check) */}
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/transactions"
        element={
          <Layout>
            <TransactionsPage />
          </Layout>
        }
      />
      <Route
        path="/categories"
        element={
          <Layout>
            <CategoriesPage />
          </Layout>
        }
      />
      <Route
        path="/suggestions"
        element={
          <Layout>
            <SuggestionsPage />
          </Layout>
        }
      />
      <Route
        path="/reports"
        element={
          <Layout>
            <ReportsPage />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout>
            <SettingsPage />
          </Layout>
        }
      />
      {/* default redirect */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}