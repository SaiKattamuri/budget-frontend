# Budget Tracker — Glassy Starter (Next.js + Tailwind)

This is a minimal starter scaffold for the responsive budget-tracking web app with a glassmorphism UI.
It contains:
- Next.js (pages dir)
- Tailwind CSS setup
- A sample BudgetSummary React component (glassy style)
- A minimal API route (`/api/transactions`) that stores transactions in a JSON file (for development only)
- Instructions to install and run

## Quick start
1. `cd budget-webapp`
2. `npm install`
3. `npm run dev`
4. Open http://localhost:3000

## Notes
- This is an MVP scaffold. For production use swap the JSON file storage with Postgres (Supabase or managed DB) and add real auth.
- The `pages/api/transactions` is file-backed for quick local testing.
