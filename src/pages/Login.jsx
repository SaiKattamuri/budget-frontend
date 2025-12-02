import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("demo");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      window.localStorage.setItem("bt_user", JSON.stringify({ email }));
      nav("/dashboard");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07111A] to-[#041018] flex items-center justify-center px-4">
      <div className="glass-strong w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold mb-1">Welcome back</h1>
        <p className="muted text-sm mb-4">Sign in to your budget tracker</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs muted">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 rounded bg-transparent border border-white/10 text-sm"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs muted">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 rounded bg-transparent border border-white/10 text-sm"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 px-4 py-2 rounded-2xl bg-primary text-black text-sm font-semibold"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
          <p className="text-[11px] text-white/60 mt-2">
            For now this is a demo login only. We will connect real auth API later.
          </p>
        </form>
      </div>
    </div>
  );
}