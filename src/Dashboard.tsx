import {
  BriefcaseMedical,
  Calendar,
  Clipboard,
  DollarSign,
} from "lucide-react";
import {
  Card,
  CardAction,
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
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const Dashboard = () => {
  return (
    <div className="rounded-lg w-full max-w-6xl p-6 mx-60 flex flex-col gap-1.5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h1 className="text-lg text-gray-500">
        Manage your profile settings and information.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full mt-4">
        <Card className="shadow-bg w-[270px] h-[115px] rounded-lg relative">
          <CardHeader>
            <CardTitle className="text-md font-[400] absolute top-3 left-5">
              Total Appointments
            </CardTitle>
            <CardDescription className="text-[20px] font-bold absolute top-13 left-5 text-black">
              +50
            </CardDescription>
            <CardDescription className="text-[12px]  absolute top-20 left-5 text-gray-500">
              +20.1% from last month
            </CardDescription>
            <CardAction className="absolute top-4 right-5 text-gray-500 ">
              <Calendar size={18} />
            </CardAction>
          </CardHeader>
        </Card>

        <Card className="shadow-bg w-[270px] h-[115px] rounded-lg relative">
          <CardHeader>
            <CardTitle className="text-md font-[400] absolute top-3 left-5">
              Total Prescriptions
            </CardTitle>
            <CardDescription className="text-[20px] font-bold absolute top-13 left-5 text-black">
              +50
            </CardDescription>
            <CardDescription className="text-[12px]  absolute top-20 left-5 text-gray-500">
              +20.1% from last month
            </CardDescription>
            <CardAction className="absolute top-4 right-5 text-gray-500 ">
              <Clipboard size={18} />
            </CardAction>
          </CardHeader>
        </Card>

        <Card className="shadow-bg w-[270px] h-[115px] rounded-lg relative">
          <CardHeader>
            <CardTitle className="text-md font-[400] absolute top-3 left-5">
              Services
            </CardTitle>
            <CardDescription className="text-[20px] font-bold absolute top-13 left-5 text-black">
              12
            </CardDescription>
            <CardDescription className="text-[12px]  absolute top-20 left-5 text-gray-500">
              +20.1% from last month
            </CardDescription>
            <CardAction className="absolute top-4 right-5 text-gray-500 ">
              <BriefcaseMedical size={18} />
            </CardAction>
          </CardHeader>
        </Card>

        <Card className="shadow-bg w-[270px] h-[115px] rounded-lg relative">
          <CardHeader>
            <CardTitle className="text-md font-[400] absolute top-3 left-5">
              Earnings
            </CardTitle>
            <CardDescription className="text-[20px] font-bold absolute top-13 left-5 text-black">
              £4368.00
            </CardDescription>
            <CardDescription className="text-[12px]  absolute top-20 left-5 text-gray-500">
              +20.1% from last month
            </CardDescription>
            <CardAction className="absolute top-4 right-5 text-gray-500 ">
              <DollarSign size={18} />
            </CardAction>
          </CardHeader>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-4">
        <Card className="shadow-bg w-[360px] h-[315px] rounded-lg relative flex flex-col">
          <h2 className="text-[20px] font-[600] absolute top-2 left-4">Payments</h2>
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
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={8}
                  />
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
        </Card>

        <Card className="shadow-bg w-[360px] h-[315px] rounded-lg relative">
          <CardHeader>
            <CardTitle className="text-[20px] font-[600] absolute top-3 left-5">
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
        </Card>
        
      </div>
    </div>
  );
};

export default Dashboard;
