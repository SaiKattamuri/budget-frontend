import React, { useState } from "react";
import Button from "../ui/Button";

export default function AddTransactionModal({ onAdd }: { onAdd: (payload: any) => void }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ amount: "", category: "Food", type: "debit", merchant: "", notes: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onAdd({ ...form, amount: Number(form.amount), date: new Date().toISOString(), id: Math.random().toString(36).slice(2) });
    setOpen(false);
    setForm({ amount: "", category: "Food", type: "debit", merchant: "", notes: "" });
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add Transaction</Button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="glass p-6 z-10 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Add Transaction</h3>
            <form onSubmit={submit} className="space-y-3">
              <input value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})} placeholder="Amount" className="w-full p-2 rounded-md border border-white/10 bg-white/5" />
              <input value={form.merchant} onChange={e=>setForm({...form, merchant:e.target.value})} placeholder="Merchant" className="w-full p-2 rounded-md border border-white/10 bg-white/5" />
              <select value={form.category} onChange={e=>setForm({...form, category:e.target.value})} className="w-full p-2 rounded-md border border-white/10 bg-white/5">
                <option>Food</option><option>Shopping</option><option>Subscription</option><option>Other</option>
              </select>
              <div className="flex gap-2">
                <label className="flex-1">
                  <input type="radio" checked={form.type==="debit"} onChange={()=>setForm({...form, type:"debit"})} /> Debit
                </label>
                <label className="flex-1">
                  <input type="radio" checked={form.type==="credit"} onChange={()=>setForm({...form, type:"credit"})} /> Credit
                </label>
              </div>
              <textarea value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} placeholder="Notes" className="w-full p-2 rounded-md border border-white/10 bg-white/5" />
              <div className="flex justify-end">
                <Button>Save</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
