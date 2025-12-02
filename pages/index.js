import Head from 'next/head'
import BudgetSummary from '../components/BudgetSummary'
import TransactionList from '../components/TransactionList'
import AddTransactionForm from '../components/AddTransactionForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Head>
        <title>Budget Tracker — Starter</title>
      </Head>

      <main className="max-w-3xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Budget Tracker</h1>
          <p className="text-sm text-gray-600">Responsive starter — mobile & desktop</p>
        </header>

        <section className="mb-6">
          <BudgetSummary periodLabel="Dec 2025" budget={50000} spent={35240} />
        </section>

        <section className="mb-6">
          <AddTransactionForm />
        </section>

        <section>
          <TransactionList />
        </section>
      </main>
    </div>
  )
}
