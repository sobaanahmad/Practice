"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "./components/ui/separator";
import { RadioGroup } from "@/components/ui/radio-group";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  addressLine1: z.string().min(5, "Address is required"),
  addressLine2: z.string().optional(),
  state: z.string().min(1, "Please select a state"),
  city: z.string().min(1, "Please enter a city"),
  zipCode: z.string().min(3, "Please enter a valid zip code"),
  conferencePackage: z.string().min(1, "Please select a conference package"),
  cardNumber: z.string().min(16, "Enter a valid card number"),
  expiry: z.string().min(4, "Enter a valid expiry date"),
  cvv: z.string().min(3, "Enter a valid CVV"),
});

type FormValues = z.infer<typeof formSchema>;

export function ConferenceRegistrationForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      state: "",
      city: "",
      zipCode: "",
      conferencePackage: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log("Form submitted:", values);
  }

  return (
    <div className="shadow-bg rounded-lg w-full max-w-5xl p-6 mx-auto mt-4 mb-4 bg-white">
      <h1 className="font-bold text-3xl mb-3">Conference Registration</h1>
      <h2 className="text-lg">
        Please book for your conference by filling the form below, specify the
        expected number joining the conference.
      </h2>
      <Separator className="my-5" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card className="shadow-none border-none">
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone No.</FormLabel>
                        <FormControl>
                          <Input placeholder="(000) 000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter state" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="addressLine1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address 1</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your address 1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="addressLine2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address 2</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your address 2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal/Zip Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter zip code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Separator className="my-5" />
              <FormField
                control={form.control}
                name="conferencePackage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conference Package</FormLabel>
                    <FormControl className="mt-2">
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="flex flex-col md:flex-row gap-4"
                      >
                        {[
                          { label: "Standard Package", value: "standard" },
                          { label: "Premium Package", value: "premium" },
                          { label: "VIP Package", value: "vip" },
                          { label: "Membership Package", value: "membership" },
                        ].map((pkg) => (
                          <label
                            key={pkg.value}
                            className={`border rounded-lg p-2 cursor-pointer flex-1 text-center ${
                              field.value === pkg.value
                                ? "border-yellow-500 bg-yellow-50"
                                : "border-gray-300"
                            }`}
                          >
                            <input
                              type="radio"
                              value={pkg.value}
                              checked={field.value === pkg.value}
                              onChange={() => field.onChange(pkg.value)}
                              className="hidden"
                            />
                            {pkg.label}
                          </label>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator className="my-6" />
              <h2 className="text-xl font-semibold">Payment Details</h2>
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="1234-5678-9012-3456"
                        {...field}
                        onChange={(e) => {
                          let value = e.target.value;
                          value = value.replace(/\D/g, "");
                          value = value.slice(0, 16);
                          value = value.replace(/(.{4})/g, "$1-");
                          value = value.replace(/-$/, "");
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="expiry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expiry Date</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="MM/YY"
                          maxLength={5}
                          value={field.value || ""}
                          onChange={(e) => {
                            let val = e.target.value;
                            val = val.replace(/\D/g, "");
                            if (val.length > 2) {
                              val = val.slice(0, 2) + "/" + val.slice(2);
                            }
                            val = val.slice(0, 5);
                            field.onChange(val);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVV</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123"
                          {...field}
                          maxLength={3}
                          onChange={(e) => {
                            const value = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 3);
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-end gap-2">
            <Button
              className="bg-red-500 text-white cursor-pointer hover:bg-red-600 hover:text-white"
              variant="outline"
              type="button"
            >
              Cancel
            </Button>
            <Button
              className="bg-green-500 text-white cursor-pointer hover:bg-green-600 hover:text-white"
              type="submit"
            >
              Save Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
