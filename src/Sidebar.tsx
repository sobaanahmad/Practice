import { Button } from "./components/ui/button";
import { Briefcase, Calendar, Clipboard, DollarSign, Headphones, LayoutDashboardIcon, MessageCircle, Settings, Star } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-[16vw] h-[95vh] shadow-bg fixed top-0 left-0">
      <img
        src="/Azina Health Care.png"
        alt="azina-health-care"
        className="w-37 h-7 ml-3 mt-6 ml-8"
      />
      <Button className="bg-white cursor-pointer mt-7 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-md">
        <LayoutDashboardIcon />
        Dashboard
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-md">
        <Calendar/>
        Appointments
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-md">
        <Clipboard />
        Prescriptions
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-md">
        <Calendar />
        Calendar
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-md">
        <Briefcase />
        Services
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-md">
        <DollarSign />
        Payments
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-md">
        <MessageCircle />
        Chats
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-md">
        <Star />
        Reviews
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-md">
        <Settings />
        Settings
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-md">
        <Headphones />
        Contact Us
      </Button>
    </div>
  );
};

export default Sidebar;
