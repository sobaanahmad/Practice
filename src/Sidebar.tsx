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
  BriefcaseMedical,
} from "lucide-react";

interface SidebarProps {
  onSelect: (page: string) => void;
  activePage: string;
}

const Sidebar = ({ onSelect, activePage }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getButtonClasses = (page: string) => {
    const baseClasses =
      "cursor-pointer mt-2 w-full ml-2 px-4 py-3 flex items-center gap-2 justify-start text-[#5B616E] rounded-md transition-colors";
    const hoverClasses = "hover:bg-[#0E9DD8] hover:text-white";
    const isActive = activePage === page;
    const bgClass = isActive ? "bg-[#0E9DD8] text-white" : "bg-white";
    return `${baseClasses} ${bgClass} ${hoverClasses}`;
  };

  return (
    <>
      <Button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#0E9DD8] text-black shadow rounded-md cursor-pointer"
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
          <Button
            onClick={() => onSelect("dashboard")}
            className={getButtonClasses("dashboard")}
          >
            <LayoutDashboardIcon
              className={
                activePage === "dashboard" ? "text-white" : "text-[#5B616E]"
              }
            />
            Dashboard
          </Button>
          <Button
            onClick={() => onSelect("appointments")}
            className={getButtonClasses("appointments")}
          >
            <Calendar
              className={
                activePage === "appointments" ? "text-white" : "text-[#5B616E]"
              }
            />
            Appointments
          </Button>
          <Button
            onClick={() => onSelect("prescriptions")}
            className={getButtonClasses("prescriptions")}
          >
            <Clipboard
              className={
                activePage === "prescriptions" ? "text-white" : "text-[#5B616E]"
              }
            />
            Prescriptions
          </Button>
          <Button
            onClick={() => onSelect("patients")}
            className={getButtonClasses("patients")}
          >
            <BriefcaseMedical
              className={
                activePage === "patients" ? "text-white" : "text-[#5B616E]"
              }
            />
            Patients
          </Button>
          <Button
            onClick={() => onSelect("calendar")}
            className={getButtonClasses("calendar")}
          >
            <Calendar
              className={
                activePage === "calendar" ? "text-white" : "text-[#5B616E]"
              }
            />
            Calendar
          </Button>
          <Button
            onClick={() => onSelect("services")}
            className={getButtonClasses("services")}
          >
            <Briefcase
              className={
                activePage === "services" ? "text-white" : "text-[#5B616E]"
              }
            />
            Services
          </Button>
          <Button
            onClick={() => onSelect("payments")}
            className={getButtonClasses("payments")}
          >
            <DollarSign
              className={
                activePage === "payments" ? "text-white" : "text-[#5B616E]"
              }
            />
            Payments
          </Button>
          <Button
            onClick={() => onSelect("chats")}
            className={getButtonClasses("chats")}
          >
            <MessageCircle
              className={
                activePage === "chats" ? "text-white" : "text-[#5B616E]"
              }
            />
            Chats
          </Button>
          <Button
            onClick={() => onSelect("reviews")}
            className={getButtonClasses("reviews")}
          >
            <Star
              className={
                activePage === "reviews" ? "text-white" : "text-[#5B616E]"
              }
            />
            Reviews
          </Button>
          <Button
            onClick={() => onSelect("settings")}
            className={getButtonClasses("settings")}
          >
            <Settings
              className={
                activePage === "settings" ? "text-white" : "text-[#5B616E]"
              }
            />
            Settings
          </Button>
          <Button
            onClick={() => onSelect("contact")}
            className={getButtonClasses("contact")}
          >
            <Headphones
              className={
                activePage === "contact" ? "text-white" : "text-[#5B616E]"
              }
            />
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
