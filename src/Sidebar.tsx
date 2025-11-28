import { Button } from "./components/ui/button";
import { Briefcase, Calendar, Clipboard, DollarSign, Headphones, LayoutDashboardIcon, MessageCircle, Settings, Star } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-[16vw] h-[99vh] shadow-[0_4px_20px_rgba(0,0,0,0.15)] absolute top-0 left-0">
      <img
        src="/Azina Health Care.png"
        alt="azina-health-care"
        className="w-37 h-7 ml-3 mt-6 ml-8"
      />
      <Button className="bg-white cursor-pointer mt-7 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-lg">
        <LayoutDashboardIcon />
        Dashboard
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-lg">
        <Calendar/>
        Appointments
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-lg">
        <Clipboard />
        Prescriptions
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-lg">
        <Calendar />
        Calendar
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-lg">
        <Briefcase />
        Services
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-lg">
        <DollarSign />
        Payments
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-lg">
        <MessageCircle />
        Chats
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-lg">
        <Star />
        Reviews
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-lg">
        <Settings />
        Settings
      </Button>
      <Button className="bg-white cursor-pointer mt-2 hover:bg-[#0E9DD8] w-42 flex justify-start ml-5 text-[#D8DBDF] hover:text-white rounded-lg">
        <Headphones />
        Contact Us
      </Button>
    </div>
  );
};

export default Sidebar;
