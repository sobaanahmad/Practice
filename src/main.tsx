/* eslint-disable react-refresh/only-export-components */
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import { SearchBar } from "./SearchBar";
import Appointments from "./Appointments";

const App = () => {
  const [activePage, setActivePage] = useState("dashboard");
  return (
    <StrictMode>
      <Sidebar onSelect={setActivePage} activePage={activePage} />
      
      <SearchBar />
      {activePage === "dashboard" && <Dashboard />}
      {activePage === "appointments" && <Appointments />}
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
