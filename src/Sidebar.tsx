import { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Briefcase,
  Calendar,
  Clipboard,
  DollarSign,
  Headphones,
  LayoutDashboardIcon,
  MessageCircle,
  Settings,
  Star,
  Menu,
  X,
} from "lucide-react";

interface SidebarProps {
  onSelect: (page: string) => void;
  activePage: string;
}

const Sidebar = ({ onSelect, activePage }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getButtonClasses = (page: string) => {
    const baseClasses =
      "cursor-pointer mt-2 w-full ml-2 px-4 py-3 flex items-center gap-2 justify-start text-[#D8DBDF] rounded-md";
    const hoverClasses = "hover:bg-[#0E9DD8] hover:text-white";
    const isActive = activePage === page;
    const bgClass = isActive ? "bg-[#0E9DD8] text-white" : "bg-white";
    return `${baseClasses} ${bgClass} ${hoverClasses}`;
  };

  return (
    <>
      <Button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#0E9DD8] shadow rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </Button>
      <div
        className={`
          fixed top-0 left-0 h-full bg-white shadow-bg z-40 
          transform transition-transform duration-300
          w-[240px]              
          lg:w-[16vw]            
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <img
          src="/Azina Health Care.png"
          alt="azina-health-care"
          className="w-37 h-7 ml-8 mt-6"
        />

        <div className="mt-8 flex flex-col w-50">

          <Button onClick={() => onSelect("dashboard")} className={getButtonClasses("dashboard")}>
            <LayoutDashboardIcon /> Dashboard
          </Button>

          <Button onClick={() => onSelect("appointments")} className={getButtonClasses("appointments")}>
            <Calendar /> Appointments
          </Button>

          <Button onClick={() => onSelect("prescriptions")} className={getButtonClasses("prescriptions")}>
            <Clipboard /> Prescriptions
          </Button>

          <Button onClick={() => onSelect("calendar")} className={getButtonClasses("calendar")}>
            <Calendar /> Calendar
          </Button>

          <Button onClick={() => onSelect("services")} className={getButtonClasses("services")}>
            <Briefcase /> Services
          </Button>

          <Button onClick={() => onSelect("payments")} className={getButtonClasses("payments")}>
            <DollarSign /> Payments
          </Button>

          <Button onClick={() => onSelect("chats")} className={getButtonClasses("chats")}>
            <MessageCircle /> Chats
          </Button>

          <Button onClick={() => onSelect("reviews")} className={getButtonClasses("reviews")}>
            <Star /> Reviews
          </Button>

          <Button onClick={() => onSelect("settings")} className={getButtonClasses("settings")}>
            <Settings /> Settings
          </Button>

          <Button onClick={() => onSelect("contact")} className={getButtonClasses("contact")}>
            <Headphones /> Contact Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
