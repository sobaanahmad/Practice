import { ListFilter, PlusIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import { ButtonGroup } from "./components/ui/button-group";
import { Input } from "./components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Appointments = () => {
  return (
    <div className="w-full max-w-6xl p-6 mx-60 flex flex-col gap-1.5">
      <h1 className="text-2xl font-bold">Appointments</h1>
      <h1 className="text-lg text-gray-500 mb-4">
        Manage your appointment settings and information.
      </h1>
      <div className="w-full max-w-6xl flex flex-row gap-2">
        <ButtonGroup>
          <Input
            placeholder="Search Here..."
            className="pr-15 py-5 rounded-sm shadow-none"
          />
        </ButtonGroup>
        <ButtonGroup>
          <Button
            className="rounded-sm cursor-pointer flex items-center justify-start w-26 px-1 py-5 text-left bg-white border border-gray-200 text-[#5B616E] font-[400] text-[16px]"
            variant="secondary"
          >
            <PlusIcon />
            Service
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            className="rounded-sm cursor-pointer flex items-center justify-start w-30 px-1 py-5 text-left bg-white border border-gray-200 text-[#5B616E] font-[400] text-[16px]"
            variant="secondary"
          >
            <PlusIcon />
            Condition
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            className="rounded-sm cursor-pointer flex items-center justify-start w-26 px-1 py-5 text-left bg-white border border-gray-200 text-[#5B616E] font-[400] text-[16px]"
            variant="secondary"
          >
            <PlusIcon />
            Status
          </Button>
        </ButtonGroup>
        <ButtonGroup className="ml-auto">
          <Button
            className="rounded-sm cursor-pointer flex items-center justify-start w-20 px-1 py-5 text-left bg-white border border-gray-200 text-[#5B616E] font-[400] text-[16px]"
            variant="secondary"
          >
            <ListFilter />
            View
          </Button>
        </ButtonGroup>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Appointments;
