import {
  ArrowLeftToLine,
  ArrowRightToLine,
  Calendar,
  CheckCircle,
  Clock,
  ListFilter,
  MoreVerticalIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { ButtonGroup } from "./components/ui/button-group";
import { Input } from "./components/ui/input";
import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "./components/ui/pagination";

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

const Appointments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);
  const totalPages = Math.ceil(invoices.length / rowsPerPage);
  const paginatedInvoices = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return invoices.slice(start, end);
  }, [currentPage, rowsPerPage]);

  return (
    <div className="w-full max-w-6xl p-6 mx-60 flex flex-col gap-1.5">
      <h1 className="text-2xl font-bold">Appointments</h1>
      <h1 className="text-lg text-gray-500 mb-4">
        Manage your appointment settings and information.
      </h1>
      {!selectedInvoice && (
        <>
          <div className="w-full max-w-6xl flex flex-row gap-2">
            <ButtonGroup>
              <Input
                placeholder="Search Here..."
                className="pr-15 py-5 rounded-sm shadow-none"
              />
            </ButtonGroup>
            <ButtonGroup>
              <Button
                className="rounded-sm w-26 py-5 bg-white border text-[#5B616E] text-[16px] font-[400] cursor-pointer"
                variant="secondary"
              >
                <PlusIcon className="mt-0.5" />
                Service
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button
                className="rounded-sm w-30 py-5 bg-white border text-[#5B616E] text-[16px] font-[400] cursor-pointer"
                variant="secondary"
              >
                <PlusIcon className="mt-0.5" />
                Condition
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button
                className="rounded-sm w-26 py-5 bg-white border text-[#5B616E] text-[16px] font-[400] cursor-pointer"
                variant="secondary"
              >
                <PlusIcon className="mt-0.5" />
                Status
              </Button>
            </ButtonGroup>
            <ButtonGroup className="ml-auto">
              <Button
                className="rounded-sm w-23 py-5 bg-white border text-[#5B616E] text-[16px] font-[400] cursor-pointer"
                variant="secondary"
              >
                <ListFilter />
                View
              </Button>
            </ButtonGroup>
          </div>
          <div className="shadow-bg rounded-xl mt-2 pl-2 py-2 pr-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[#8E95A2]">ID</TableHead>
                  <TableHead className="text-[#8E95A2]">Appt. For</TableHead>
                  <TableHead className="text-[#8E95A2]">Patient Name</TableHead>
                  <TableHead className="text-[#8E95A2]">Service</TableHead>
                  <TableHead className="text-[#8E95A2]">Condition</TableHead>
                  <TableHead className="text-[#8E95A2]">Status</TableHead>
                  <TableHead className="text-[#8E95A2]">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedInvoices.map((invoice, index) => (
                  <TableRow
                    key={`${invoice.invoice}-${index}`}
                    className="relative"
                  >
                    <TableCell>{invoice.invoice}</TableCell>
                    <TableCell>{invoice.apptFor}</TableCell>
                    <TableCell>{invoice.patientName}</TableCell>
                    <TableCell>{invoice.service}</TableCell>
                    <TableCell>{invoice.condition}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {invoice.status === "Completed" && (
                          <CheckCircle className="w-4 h-4 text-[#47D477]" />
                        )}
                        {invoice.status === "Pending" && (
                          <Calendar className="w-4 h-4 text-black" />
                        )}
                        {invoice.status === "Upcoming" && (
                          <Clock className="w-4 h-4 text-black" />
                        )}
                        <span
                          className={
                            invoice.status === "Completed"
                              ? "text-[#47D477] font-medium"
                              : "text-black"
                          }
                        >
                          {invoice.status}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => setSelectedInvoice(invoice.invoice)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <MoreVerticalIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-end px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="whitespace-nowrap">Rows per page</span>
                <Select
                  value={String(rowsPerPage)}
                  onValueChange={(value) => {
                    setRowsPerPage(Number(value));
                    setCurrentPage(1);
                  }}
                >
                  <SelectTrigger className="w-20 h-8 shrink-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-sm text-gray-600 whitespace-nowrap">
                Page {currentPage} of {totalPages}
              </span>
              <Pagination>
                <PaginationContent className="flex gap-2">
                  <PaginationItem>
                    <Button
                      onClick={() => setCurrentPage(1)}
                      className={`px-3 py-1 rounded cursor-pointer ${
                        currentPage === 1
                          ? "bg-gray-200 text-[#9E9E9E] hover:bg-gray-200"
                          : "bg-gray-200 text-black hover:bg-gray-300"
                      }`}
                    >
                      <ArrowLeftToLine />
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationPrevious
                      isDisabled={currentPage === 1}
                      className={`px-3 py-1 rounded cursor-pointer ${
                        currentPage === 1
                          ? "bg-gray-200 hover:bg-gray-200"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                      onClick={() =>
                        currentPage > 1 &&
                        setCurrentPage((p) => Math.max(p - 1, 1))
                      }
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      isDisabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded cursor-pointer ${
                        currentPage === totalPages
                          ? "bg-gray-200 hover:bg-gray-200"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                      onClick={() =>
                        currentPage < totalPages &&
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                      }
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <Button
                      onClick={() => setCurrentPage(totalPages)}
                      className={`px-3 py-1 rounded cursor-pointer ${
                        currentPage === totalPages
                          ? "bg-gray-200 text-[#9E9E9E] hover:bg-gray-200"
                          : "bg-gray-200 text-black hover:bg-gray-300"
                      }`}
                    >
                      <ArrowRightToLine />
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </>
      )}
      {selectedInvoice && (
        <div className="w-full shadow-bg rounded-xl mt-2 p-5 relative gap-0 flex flex-col">
          <div className="flex flex-wrap gap-35 w-full">
            <div className="flex flex-col items-start m-2">
              <h1 className="text-[12px] text-[#9E9E9E] font-[400]">
                Appt. ID
              </h1>
              <h2 className="text-[14px] text-black font-[400]">346346</h2>
            </div>
            <div className="flex flex-col items-start m-2">
              <h1 className="text-[12px] text-[#9E9E9E] font-[400]">Service</h1>
              <h2 className="text-[14px] text-black font-[400]">Urgent Care</h2>
            </div>
            <div className="flex flex-col items-start m-2">
              <h1 className="text-[12px] text-[#9E9E9E] font-[400]">
                Condition
              </h1>
              <h2 className="text-[14px] text-black font-[400]">Cold & Flu</h2>
            </div>
            <div className="flex flex-col items-start m-2">
              <h1 className="text-[12px] text-[#9E9E9E] font-[400]">
                Appt. Type
              </h1>
              <h2 className="text-[14px] text-black font-[400]">In-Person</h2>
            </div>
            <div className="flex flex-col items-start m-2">
              <h1 className="text-[12px] text-[#9E9E9E] font-[400]">
                Appt. For
              </h1>
              <h2 className="text-[14px] text-black font-[400]">Adult</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-26 w-full mt-4">
            <div className="flex flex-col items-start m-2">
              <h1 className="text-[12px] text-[#9E9E9E] font-[400]">
                Appt. Date
              </h1>
              <h2 className="text-[14px] text-black font-[400]">
                Nov 22, 2024
              </h2>
            </div>
            <div className="flex flex-col items-start m-2">
              <h1 className="text-[12px] text-[#9E9E9E] font-[400]">
                Appt. Time
              </h1>
              <h2 className="text-[14px] text-black font-[400]">05:00 PM</h2>
            </div>
            <div className="flex flex-col items-start m-2 flex-1 min-w-[200px] ml-16">
              <h1 className="text-[12px] text-[#9E9E9E] font-[400]">
                Location
              </h1>
              <h2 className="text-[14px] text-black font-[400]">
                4517 Washington Ave. Manchester, Kentucky 39495
              </h2>
            </div>
          </div>
          <Button
            className="absolute shadow-bg top-44 right-0 text-white bg-[#0E9DD8] hover:bg-[#0E9DD8] px-4 py-2 rounded-lg cursor-pointer text-md font-[600]"
            onClick={() => setSelectedInvoice(null)}
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
};

export default Appointments;
