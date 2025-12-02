import Head from 'next/head'
import BudgetSummary from '../components/BudgetSummary'
import TransactionList from '../components/TransactionList'
import AddTransactionForm from '../components/AddTransactionForm'

export default function Home() {
  return (
    <div className="min-h-screen p-6">
      <Head>
        <title>Budget Tracker — Glassy UI</title>
      </Head>

      <main className="max-w-4xl mx-auto">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">Budget Tracker</h1>
            <p className="text-sm text-slate-600">Glassy UI — responsive on desktop & mobile</p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="fab glass p-3">⚙️</button>
            <button className="fab glass p-3">🔔</button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="col-span-1 md:col-span-2 glass p-4">
            <BudgetSummary periodLabel="Dec 2025" budget={50000} spent={35240} />
          </div>
          <div className="glass p-4">
            <div className="text-sm text-slate-500 mb-2">Quick Actions</div>
            <div className="flex flex-col gap-3">
              <button className="w-full py-2 rounded-md bg-white/40 backdrop-blur-sm">Add Expense</button>
              <button className="w-full py-2 rounded-md bg-white/30 backdrop-blur-sm">Add Income</button>
              <button className="w-full py-2 rounded-md bg-white/20 backdrop-blur-sm">Export CSV</button>
            </div>
          </div>
        </section>

        <section className="mb-6 glass p-4">
          <AddTransactionForm />
        </section>

        <section className="glass p-4">
          <TransactionList />
        </section>
      </main>
    </div>
  )
}
