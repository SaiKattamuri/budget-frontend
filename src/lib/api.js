import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://192.168.0.105:4000";

const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
  timeout: 10000
});

export async function getTransactions() {
  const res = await api.get("/transactions");
  return res.data;
}

export async function postTransaction(payload) {
  const res = await api.post("/transactions", payload);
  return res.data;
}

export async function getCategories() {
  const res = await api.get("/categories");
  return res.data;
}