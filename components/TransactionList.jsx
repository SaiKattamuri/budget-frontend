import React, {useEffect, useState} from 'react';

export default function TransactionList(){
  const [txns, setTxns] = useState([]);

  useEffect(()=> {
    fetch('/api/transactions').then(r=>r.json()).then(data=>{
      setTxns(data.transactions || []);
    })
  },[])

  if(txns.length === 0) return <div className="text-slate-600">No transactions yet.</div>

  return (
    <div className="space-y-3">
      {txns.map(t=>(
        <div key={t.id} className="p-3 bg-white/30 backdrop-blur-sm rounded-md flex justify-between items-center">
          <div>
            <div className="font-medium text-slate-800">{t.category || 'Uncategorized'}</div>
            <div className="text-sm text-slate-600">{t.date} • {t.note}</div>
          </div>
          <div className={`font-semibold ${t.type==='expense' ? 'text-red-600' : 'text-green-700'}`}>
            {t.type==='expense' ? '-' : '+'}₹{t.amount}
          </div>
        </div>
      ))}
    </div>
  )
}
