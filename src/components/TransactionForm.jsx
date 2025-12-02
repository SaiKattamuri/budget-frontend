import React, { useState } from "react";

export default function TransactionForm({ categories = [], onCancel, onSave }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0,10));
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("debit");
  const [category_id, setCategory] = useState(categories.length ? categories[0].id : "");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave({ date, amount: Number(amount), type, category_id, notes });
    } catch (err) {
      console.error(err);
      alert("Failed to save transaction");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div className="absolute inset-0 bg-black/60" onClick={onCancel}></div>
      <div className="relative w-full max-w-md glass p-6 z-50">
        <h3 className="text-lg font-semibold mb-3">Add Transaction</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm muted">Date</label>
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-full mt-1 p-2 rounded bg-transparent border border-white/6" required />
          </div>
          <div>
            <label className="block text-sm muted">Amount</label>
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} className="w-full mt-1 p-2 rounded bg-transparent border border-white/6" step="0.01" required />
          </div>
          <div className="flex gap-2">
            <div>
              <label className="block text-sm muted">Type</label>
              <select value={type} onChange={(e)=>setType(e.target.value)} className="mt-1 p-2 rounded bg-transparent border border-white/6">
                <option value="debit">Expense</option>
                <option value="credit">Income</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm muted">Category</label>
              <select value={category_id} onChange={(e)=>setCategory(e.target.value)} className="mt-1 p-2 rounded bg-transparent border border-white/6">
                <option value="">Uncategorized</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm muted">Notes</label>
            <input value={notes} onChange={(e)=>setNotes(e.target.value)} className="w-full mt-1 p-2 rounded bg-transparent border border-white/6" />
          </div>

          <div className="flex justify-end gap-2 mt-3">
            <button type="button" onClick={onCancel} className="px-4 py-2 rounded-2xl border">Cancel</button>
            <button type="submit" disabled={saving} className="px-4 py-2 rounded-2xl bg-primary text-black font-semibold">
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}