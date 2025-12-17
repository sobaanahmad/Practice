/* eslint-disable react-refresh/only-export-components */
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import { SearchBar } from "./SearchBar";
import { AvatarDemo } from "./Avatar";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "./components/ui/button";
import Appointments from "./Appointments";

const App = () => {
  const [activePage, setActivePage] = useState("dashboard");
  return (
    <StrictMode>
      <Sidebar onSelect={setActivePage} activePage={activePage} />
      <Button className="absolute right-22 top-6 bg-white text-[#5B616E] cursor-pointer hover:bg-white">
        <ShoppingCart />
      </Button>
      <Button className="absolute right-32 top-6 bg-white text-[#5B616E] cursor-pointer hover:bg-white">
        <Search />
      </Button>
      <AvatarDemo />
      <SearchBar />
      {activePage === "dashboard" && <Dashboard />}
      {activePage === "appointments" && <Appointments />}
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
