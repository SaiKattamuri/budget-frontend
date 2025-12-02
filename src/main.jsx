import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Dashboard from "./pages/Dashboard";

function App(){ return <Dashboard /> }

createRoot(document.getElementById("root")).render(<App />);