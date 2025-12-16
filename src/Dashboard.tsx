import { useState } from "react";
import { Banknote, BriefcaseMedical, Calendar, Clipboard } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Button } from "./components/ui/button";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const invoices = [
  {
    invoice: "SE95790",
    apptFor: "Adult",
    patientName: "Guy Hawkins",
    service: "Urgent Care",
    condition: "Cold & Flu",
    status: "Pending",
    date: "Nov 22, 2024",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    servicesID: "51655",
    conditions: "05",
    priceRange: "£35.00 - £100.00",
    lastUpdate: "Sep 24, 2024",
    createdOn: "Sep 24, 2024",
  },
  {
    invoice: "SE95790",
    apptFor: "Adult",
    patientName: "Brooklyn Simmons",
    service: "STD/STI",
    condition: "Cough",
    status: "Completed",
    date: "Nov 22, 2024",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
    servicesID: "51655",
    conditions: "05",
    priceRange: "£35.00 - £100.00",
    lastUpdate: "Sep 24, 2024",
    createdOn: "Sep 24, 2024",
  },
  {
    invoice: "SE95790",
    apptFor: "Adult",
    patientName: "Marvin McKinney",
    service: "Women's Health",
    condition: "Blood Pressure",
    status: "Completed",
    date: "Nov 22, 2024",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
    servicesID: "51655",
    conditions: "05",
    priceRange: "£35.00 - £100.00",
    lastUpdate: "Sep 24, 2024",
    createdOn: "Sep 24, 2024",
  },
  {
    invoice: "SE95790",
    apptFor: "Adult",
    patientName: "Leslie Alexander",
    service: "Mens Health",
    condition: "Cold & Flu",
    status: "Upcoming",
    date: "Nov 22, 2024",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
    servicesID: "51655",
    conditions: "05",
    priceRange: "£35.00 - £100.00",
    lastUpdate: "Sep 24, 2024",
    createdOn: "Sep 24, 2024",
  },
  {
    invoice: "SE95790",
    apptFor: "Adult",
    patientName: "Tom Hanks",
    service: "Urgent Care",
    condition: "Blood Pressure",
    status: "Pending",
    date: "Nov 22, 2024",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
    servicesID: "51655",
    conditions: "05",
    priceRange: "£35.00 - £100.00",
    lastUpdate: "Sep 24, 2024",
    createdOn: "Sep 24, 2024",
  },
  {
    invoice: "SE95790",
    apptFor: "Adult",
    patientName: "Gary Potts",
    service: "Emergency",
    condition: "Fracture",
    status: "Completed",
    date: "Nov 22, 2024",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
    servicesID: "51655",
    conditions: "05",
    priceRange: "£35.00 - £100.00",
    lastUpdate: "Sep 24, 2024",
    createdOn: "Sep 24, 2024",
  },
  {
    invoice: "SE95790",
    apptFor: "Adult",
    patientName: "Steve McQueen",
    service: "ECG",
    condition: "Arrhythmia",
    status: "Upcoming",
    date: "Nov 22, 2024",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
    servicesID: "51655",
    conditions: "05",
    priceRange: "£35.00 - £100.00",
    lastUpdate: "Sep 24, 2024",
    createdOn: "Sep 24, 2024",
  },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
} satisfies ChartConfig;

const Dashboard = () => {
  const [showAllRowsTab, setShowAllRowsTab] = useState(false);
  const [showAllRowsSecond, setShowAllRowsSecond] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  const displayedInvoicesTab = showAllRowsTab ? invoices : invoices.slice(0, 4);
  const displayedInvoicesSecond = showAllRowsSecond
    ? invoices
    : invoices.slice(0, 4);

  return (
    <div className="rounded-lg w-full max-w-6xl p-6 mx-60 flex flex-col gap-1.5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h1 className="text-lg text-gray-500">
        Manage your profile settings and information.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full mt-4">
        <Card className="shadow-bg w-[270px] h-[115px] rounded-lg relative hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
          <CardHeader>
            <CardTitle className="text-md font-[400] absolute top-3 left-5">
              Total Appointments
            </CardTitle>
            <CardDescription className="text-[20px] font-bold absolute top-13 left-5 text-black">
              +50
            </CardDescription>
            <CardDescription className="text-[12px] absolute top-20 left-5 text-gray-500">
              +20.1% from last month
            </CardDescription>
            <CardAction className="absolute top-4 right-5 text-gray-500">
              <Calendar size={18} />
            </CardAction>
          </CardHeader>
        </Card>
        <Card className="shadow-bg w-[270px] h-[115px] rounded-lg relative hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
          <CardHeader>
            <CardTitle className="text-md font-[400] absolute top-3 left-5">
              Total Prescriptions
            </CardTitle>
            <CardDescription className="text-[20px] font-bold absolute top-13 left-5 text-black">
              +50
            </CardDescription>
            <CardDescription className="text-[12px] absolute top-20 left-5 text-gray-500">
              +20.1% from last month
            </CardDescription>
            <CardAction className="absolute top-4 right-5 text-gray-500">
              <Clipboard size={18} />
            </CardAction>
          </CardHeader>
        </Card>
        <Card className="shadow-bg w-[270px] h-[115px] rounded-lg relative hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
          <CardHeader>
            <CardTitle className="text-md font-[400] absolute top-3 left-5">
              Services
            </CardTitle>
            <CardDescription className="text-[20px] font-bold absolute top-13 left-5 text-black">
              12
            </CardDescription>
            <CardDescription className="text-[12px] absolute top-20 left-5 text-gray-500">
              +20.1% from last month
            </CardDescription>
            <CardAction className="absolute top-4 right-5 text-gray-500">
              <BriefcaseMedical size={18} />
            </CardAction>
          </CardHeader>
        </Card>
        <Card className="shadow-bg w-[270px] h-[115px] rounded-lg relative hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
          <CardHeader>
            <CardTitle className="text-md font-[400] absolute top-3 left-5">
              Earnings
            </CardTitle>
            <CardDescription className="text-[20px] font-bold absolute top-13 left-5 text-black">
              £4368.00
            </CardDescription>
            <CardDescription className="text-[12px] absolute top-20 left-5 text-gray-500">
              +20.1% from last month
            </CardDescription>
            <CardAction className="absolute top-4 right-5 text-gray-500">
              <Banknote size={18} />
            </CardAction>
          </CardHeader>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
        <Card className="shadow-bg w-[360px] h-[315px] rounded-lg relative flex flex-col">
          <h2 className="text-[20px] font-[600] absolute top-2 left-4">
            Payments
          </h2>
          <div className="flex-1 w-full ml-[-20px]">
            <ChartContainer config={chartConfig} className="w-full h-full mt-5">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <YAxis />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="desktop" fill="#0E9DD8" radius={8} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </Card>
        <Card className="shadow-bg w-[360px] h-[315px] rounded-lg relative">
          <CardHeader>
            <CardTitle className="text-[20px] font-[600] absolute top-3 left-5">
              Appointments
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-12">
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{ left: 12, right: 12 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Line
                  dataKey="desktop"
                  type="monotone"
                  stroke="#0E9DD8"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="mobile"
                  type="monotone"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="shadow-bg w-[360px] h-[315px] rounded-lg relative overflow-hidden">
          <CardHeader>
            <CardTitle className="text-[20px] font-[600] absolute top-3 left-5">
              Upcoming Appointments
            </CardTitle>
            <Carousel
              opts={{ align: "start" }}
              className="w-full max-w-[230px] mt-8 relative ml-10 cursor-pointer"
            >
              <CarouselContent>
                {Array.from({ length: 15 }).map((_, index) => {
                  const date = new Date();
                  date.setDate(index + 1);
                  const day = date.getDate();
                  const month = date.toLocaleString("default", {
                    month: "short",
                  });
                  return (
                    <CarouselItem
                      key={index}
                      className="basis-1/4 md:basis-1/5"
                    >
                      <div className="p-[1px]">
                        <div className="w-full h-0 pb-[100%] relative">
                          <div className="absolute inset-0 bg-white flex items-center justify-center">
                            <span className="text-[14px] font-semibold text-center hover:bg-[#0E9DD8] hover:text-white rounded-lg p-2">
                              {month} {day}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 cursor-pointer rounded-md p-2 " />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 cursor-pointer rounded-md p-2" />
            </Carousel>
            <div className="mt-3 h-[165px] overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell>{invoice.invoice}</TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className="grid grid-cols-1 w-full mt-4 rounded-lg shadow-bg p-4 relative">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="absolute top-4 left-4">
            <TabsTrigger value="tab1" className="cursor-pointer">
              Appointment
            </TabsTrigger>
            <TabsTrigger value="tab2" className="cursor-pointer">
              Prescriptions
            </TabsTrigger>
            <TabsTrigger value="tab3" className="cursor-pointer">
              Patients
            </TabsTrigger>
          </TabsList>
          <Button
            onClick={() => setShowAllRowsTab(!showAllRowsTab)}
            className="absolute top-4 right-4 font-[600] text-[#0E9DD8] bg-white hover:bg-white px-3 py-1 rounded text-sm cursor-pointer"
          >
            {showAllRowsTab ? "Hide" : "View All"}
          </Button>
          {["tab1", "tab2", "tab3"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-12">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-[#8E95A2]">ID</TableHead>
                      <TableHead className="text-[#8E95A2]">
                        Appt. For
                      </TableHead>
                      <TableHead className="text-[#8E95A2]">
                        Patient Name
                      </TableHead>
                      <TableHead className="text-[#8E95A2]">Service</TableHead>
                      <TableHead className="text-[#8E95A2]">
                        Condition
                      </TableHead>
                      <TableHead className="text-[#8E95A2]">Status</TableHead>
                      <TableHead className="text-[#8E95A2]">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {displayedInvoicesTab.map((invoice) => (
                      <TableRow key={invoice.invoice}>
                        <TableCell>{invoice.invoice}</TableCell>
                        <TableCell>{invoice.apptFor}</TableCell>
                        <TableCell>{invoice.patientName}</TableCell>
                        <TableCell>{invoice.service}</TableCell>
                        <TableCell>{invoice.condition}</TableCell>
                        <TableCell>{invoice.status}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <div className="grid grid-cols-1 w-full mt-4 rounded-lg shadow-bg p-4 relative">
        <Button
          onClick={() => setShowAllRowsSecond(!showAllRowsSecond)}
          className="absolute top-3 right-4 font-[600] text-[#0E9DD8] bg-white hover:bg-white px-3 py-1 rounded text-sm cursor-pointer"
        >
          {showAllRowsSecond ? "Hide" : "View All"}
        </Button>
        <div className="overflow-x-auto mt-4">
          <h1 className="font-[600] text-[20px] ml-1 absolute top-4">
            Services
          </h1>
          <Table className="mt-4">
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#8E95A2]">ID</TableHead>
                <TableHead className="text-[#8E95A2]">Service</TableHead>
                <TableHead className="text-[#8E95A2]">Conditions</TableHead>
                <TableHead className="text-[#8E95A2]">Price Range</TableHead>
                <TableHead className="text-[#8E95A2]">Last Update</TableHead>
                <TableHead className="text-[#8E95A2]">Created On</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedInvoicesSecond.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell>{invoice.servicesID}</TableCell>
                  <TableCell>{invoice.service}</TableCell>
                  <TableCell>{invoice.conditions}</TableCell>
                  <TableCell>{invoice.priceRange}</TableCell>
                  <TableCell>{invoice.lastUpdate}</TableCell>
                  <TableCell>{invoice.createdOn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
