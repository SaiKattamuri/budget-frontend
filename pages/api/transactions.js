import fs from 'fs';
import path from 'path';

const DBPATH = path.join(process.cwd(), 'data', 'transactions.json');

function ensureDB(){
  const dir = path.dirname(DBPATH);
  if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if(!fs.existsSync(DBPATH)) fs.writeFileSync(DBPATH, JSON.stringify({ transactions: [], lastId: 0 }, null, 2));
}

export default function handler(req, res){
  ensureDB();
  const raw = fs.readFileSync(DBPATH, 'utf8');
  const db = JSON.parse(raw);

  if(req.method === 'GET'){
    res.status(200).json({ transactions: db.transactions });
    return;
  }

  if(req.method === 'POST'){
    const body = req.body;
    const id = db.lastId + 1;
    const txn = {
      id,
      amount: body.amount,
      type: body.type || 'expense',
      note: body.note || '',
      category: body.category || 'General',
      date: body.date || new Date().toISOString().slice(0,10),
      created_at: new Date().toISOString()
    };
    db.transactions.unshift(txn);
    db.lastId = id;
    fs.writeFileSync(DBPATH, JSON.stringify(db, null, 2));
    res.status(201).json(txn);
    return;
  }

  res.setHeader('Allow', ['GET','POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
