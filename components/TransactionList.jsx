import React, {useEffect, useState} from 'react';

export default function TransactionList(){
  const [txns, setTxns] = useState([]);

  useEffect(()=> {
    fetch('/api/transactions').then(r=>r.json()).then(data=>{
      setTxns(data.transactions || []);
    })
  },[])

  if(txns.length === 0) return <div className="text-gray-600">No transactions yet.</div>

  return (
    <div className="space-y-2">
      {txns.map(t=>(
        <div key={t.id} className="p-3 bg-white rounded shadow-sm flex justify-between items-center">
          <div>
            <div className="font-medium">{t.category || 'Uncategorized'}</div>
            <div className="text-sm text-gray-500">{t.date} • {t.note}</div>
          </div>
          <div className={`font-medium ${t.type==='expense' ? 'text-red-600' : 'text-green-600'}`}>
            {t.type==='expense' ? '-' : '+'}₹{t.amount}
          </div>
        </div>
      ))}
    </div>
  )
}
