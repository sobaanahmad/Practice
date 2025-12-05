import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dashboard from "./Dashboard";
//import { TabsTop } from './Tabs'
import Sidebar from "./Sidebar";
import { SearchBar } from "./SearchBar";
import { AvatarDemo } from "./Avatar";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "./components/ui/button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <TabsTop/> */}
    <Sidebar />
    <Button className="absolute right-22 top-6 bg-white text-[#5B616E] cursor-pointer hover:bg-white">
      <ShoppingCart />
    </Button>
    <Button className="absolute right-32 top-6 bg-white text-[#5B616E] cursor-pointer hover:bg-white">
      <Search />
    </Button>
    <AvatarDemo />
    <SearchBar />
    <Dashboard />
  </StrictMode>
);
