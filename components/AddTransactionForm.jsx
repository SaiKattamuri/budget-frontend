import React, {useState} from 'react';

export default function AddTransactionForm(){
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [type, setType] = useState('expense');

  async function onSubmit(e){
    e.preventDefault();
    const body = { amount: Number(amount), note, type, date: new Date().toISOString().slice(0,10), category: 'General' };
    const res = await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if(res.ok){
      setAmount(''); setNote('');
      // naive refresh
      window.location.reload();
    } else {
      alert('Error saving transaction');
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-white p-4 rounded shadow-sm space-y-3">
      <div className="flex gap-2">
        <select value={type} onChange={e=>setType(e.target.value)} className="border p-2 rounded">
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount" className="flex-1 border p-2 rounded" />
        <input value={note} onChange={e=>setNote(e.target.value)} placeholder="Note (optional)" className="flex-1 border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">Add</button>
      </div>
    </form>
  )
}
