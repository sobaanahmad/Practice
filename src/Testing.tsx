"use client"

import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"

const formSchema = z.object({
  title: z.string().min(1, "Please select a title"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  countryCode: z.string().min(1, "Please select a country code"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  addressLine1: z.string().min(5, "Address is required"),
  addressLine2: z.string().optional(),
  country: z.string().min(1, "Please select a country"),
  state: z.string().min(1, "Please select a state"),
  city: z.string().min(1, "Please enter a city"),
  zipCode: z.string().min(3, "Please enter a valid zip code"),
  professionalEmail: z.string().email("Invalid professional email"),
  professionalPhone: z.string().min(5, "Please enter a valid phone number"),
  licenseNo: z.string().min(2, "Please enter a license number"),
  regulatoryBody: z.string().min(2, "Please enter regulatory body"),
  profileImage: z.any().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function ProfileForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+44",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      professionalEmail: "",
      professionalPhone: "",
      licenseNo: "",
      regulatoryBody: "",
    },
  })

  function onSubmit(values: FormValues) {
    console.log("Form submitted:", values)
    // Handle form submission
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (max 50MB)
      if (file.size > 50 * 1024 * 1024) {
        alert("File size must be less than 50MB")
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      form.setValue("profileImage", file)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Profile Image Section */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Image</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-6">
              {/* Image Upload Area */}
              <label className="flex-shrink-0">
                <div className="w-24 h-24 border-2 border-dashed border-border rounded-lg flex items-center justify-center cursor-pointer hover:bg-muted transition-colors">
                  {imagePreview ? (
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Profile preview"
                      className="w-full h-full object-cover rounded-[calc(0.625rem-2px)]"
                    />
                  ) : (
                    <div className="text-center">
                      <Upload className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                    </div>
                  )}
                </div>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>

              {/* Upload Instructions */}
              <div className="flex flex-col justify-center">
                <p className="text-sm font-medium">Upload Image</p>
                <p className="text-xs text-muted-foreground">Max image size allowed 50MB</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Contact Details Section */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Title, First Name, Last Name, Email */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select title" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Mr">Mr</SelectItem>
                        <SelectItem value="Mrs">Mrs</SelectItem>
                        <SelectItem value="Miss">Miss</SelectItem>
                        <SelectItem value="Ms">Ms</SelectItem>
                        <SelectItem value="Dr">Dr</SelectItem>
                        <SelectItem value="Prof">Prof</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
            </div>

            {/* Phone */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country Code</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="+1">+1 (US)</SelectItem>
                        <SelectItem value="+44">+44 (UK)</SelectItem>
                        <SelectItem value="+91">+91 (India)</SelectItem>
                        <SelectItem value="+61">+61 (Australia)</SelectItem>
                        <SelectItem value="+1-CA">+1 (Canada)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="md:col-span-3">
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="(000) 000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Address */}
            <FormField
              control={form.control}
              name="addressLine1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address Line 1</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
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
                  <FormLabel>Address Line 2</FormLabel>
                  <FormControl>
                    <Input placeholder="Apartment, suite, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country, State, City */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="UK">United Kingdom</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                        <SelectItem value="AU">Australia</SelectItem>
                        <SelectItem value="IN">India</SelectItem>
                      </SelectContent>
                    </Select>
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                        <SelectItem value="FL">Florida</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
            </div>

            {/* Zip Code */}
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter zip code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Professional Contact Details Section */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Professional Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="professionalEmail"
                render={({ field }) => (
                  <FormItem className="md:col-span-1">
                    <FormLabel>Professional Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Professional email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="professionalPhone"
                render={({ field }) => (
                  <FormItem className="md:col-span-1">
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="(000) 000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="licenseNo"
                render={({ field }) => (
                  <FormItem className="md:col-span-1">
                    <FormLabel>License No.</FormLabel>
                    <FormControl>
                      <Input placeholder="License number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Regulatory Body */}
            <FormField
              control={form.control}
              name="regulatoryBody"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Regulatory Body</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter regulatory body" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit">Save Profile</Button>
        </div>
      </form>
    </Form>
  )
}