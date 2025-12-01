import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";

export default function Login(){
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const nav = useNavigate();

  function submit(e: React.FormEvent){
    e.preventDefault();
    nav("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <GlassCard className="max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2">Log in</h2>
        <p className="text-sm text-gray-500 mb-4">Sign in to access your budgets</p>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full p-3 rounded-md bg-white/5 border border-white/10" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" className="w-full p-3 rounded-md bg-white/5 border border-white/10" placeholder="Password" value={pw} onChange={e=>setPw(e.target.value)} />
          <div className="flex justify-end">
            <Button>Sign in</Button>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}
