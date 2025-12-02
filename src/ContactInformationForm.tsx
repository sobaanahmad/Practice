import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phoneCode: z.string().min(1),
  phone: z.string().min(1),
  address1: z.string().min(1),
  address2: z.string().min(1),
  country: z.string().min(1),
  state: z.string().min(1),
  city: z.string().min(1),
  zip: z.string().min(1),
  workEmail: z.string().email(),
  workPhoneCode: z.string().min(1),
  workPhone: z.string().min(1),
  license: z.string().min(1),
  regulatoryBody: z.string().min(1),
});

interface ContactInformationFormProps {
  onNext?: () => void;
}

const ContactInformationForm: React.FC<ContactInformationFormProps> = ({
  onNext,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+44",
    phone: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    workEmail: "",
    workPhoneCode: "+44",
    workPhone: "",
    license: "",
    regulatoryBody: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClick = () => fileInputRef.current?.click();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const isFormValid =
    formSchema.safeParse(formData).success && selectedFile !== null;

 const handleNextStep = () => {
  if (!selectedFile) {
    alert("Please upload your profile image before continuing.");
    return;
  }
  if (!isFormValid) {
    alert("Please fill in all fields correctly before proceeding.");
    return;
  }
  if (onNext) {
    onNext();
  }
};

  return (
    <div className="flex justify-center w-full">
      <div className="flex-1 p-6">
        <div className="shadow-bg rounded-lg w-full max-w-5xl p-6 bg-white mx-auto">
          <h1 className="text-lg font-semibold mb-4">Profile Image</h1>
          <div
            onClick={handleClick}
            className="w-40 h-40 bg-[#F7F8F8] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 mb-6"
          >
            <img src="/upload.png" alt="Upload" className="w-6 h-6 mb-3" />
            <p className="text-gray-600 text-center font-semibold mb-1">
              {selectedFile ? selectedFile.name : "Upload Image"}
            </p>
            <p className="text-gray-400 text-center text-xs">
              {selectedFile
                ? selectedFile.name
                : "Max image size allowed 50mb."}
            </p>
          </div>
          <Input
            type="file"
            ref={fileInputRef}
            onChange={handleChange}
            className="hidden"
          />
          <h1 className="text-lg font-semibold mb-4">
            Personal Contact Details
          </h1>
          <form className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Field className="w-20 font-semibold">
                <Select onValueChange={(v) => updateField("title", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Miss" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="miss">Miss</SelectItem>
                    <SelectItem value="mr">Mr.</SelectItem>
                    <SelectItem value="mrs">Mrs.</SelectItem>
                    <SelectItem value="ms">Ms.</SelectItem>
                    <SelectItem value="dr">Dr.</SelectItem>
                    <SelectItem value="prof">Prof.</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field className="flex-1">
                <Input
                  placeholder="First name"
                  required
                  onChange={(e) => updateField("firstName", e.target.value)}
                />
              </Field>
              <Field className="flex-1">
                <Input
                  placeholder="Last name"
                  required
                  onChange={(e) => updateField("lastName", e.target.value)}
                />
              </Field>
              <Field className="flex-1">
                <Input
                  placeholder="Email"
                  required
                  type="email"
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </Field>
            </div>
            <div className="flex gap-0 items-center">
              <Field className="w-20 font-semibold">
                <Select
                  defaultValue="+44"
                  onValueChange={(v) => updateField("phoneCode", v)}
                >
                  <SelectTrigger className="rounded-r-none border-r-0 rounded-l-lg">
                    <SelectValue placeholder="+44" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+44">+44</SelectItem>
                    <SelectItem value="+92">+92</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field className="flex w-70.5">
                <Input
                  placeholder="Phone"
                  required
                  className="rounded-l-none rounded-r-lg border-l-0"
                  onChange={(e) => updateField("phone", e.target.value)}
                />
              </Field>
            </div>
            <Field>
              <Input
                placeholder="Address line 1"
                required
                onChange={(e) => updateField("address1", e.target.value)}
              />
            </Field>
            <Field>
              <Input
                placeholder="Address line 2"
                required
                onChange={(e) => updateField("address2", e.target.value)}
              />
            </Field>
            <div className="flex flex-wrap gap-4">
              <Field className="flex-1">
                <Select onValueChange={(v) => updateField("country", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pakistan">Pakistan</SelectItem>
                    <SelectItem value="america">America</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field className="flex-1">
                <Select onValueChange={(v) => updateField("state", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="punjab">Punjab</SelectItem>
                    <SelectItem value="sindh">Sindh</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field className="flex-1">
                <Select onValueChange={(v) => updateField("city", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lahore">Lahore</SelectItem>
                    <SelectItem value="karachi">Karachi</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <Field className="flex-1 w-75">
              <Input
                placeholder="Zip code"
                required
                onChange={(e) => updateField("zip", e.target.value)}
              />
            </Field>
            <h1 className="text-lg font-semibold mt-4">
              Professional Contact Details
            </h1>
            <div className="flex flex-wrap gap-4">
              <Field className="flex-1">
                <Input
                  placeholder="Professional email"
                  required
                  type="email"
                  onChange={(e) => updateField("workEmail", e.target.value)}
                />
              </Field>
              <div className="flex gap-0 items-center">
                <Field className="w-19 font-semibold">
                  <Select
                    defaultValue="+44"
                    onValueChange={(v) => updateField("workPhoneCode", v)}
                  >
                    <SelectTrigger className="rounded-r-none border-r-0 rounded-l-lg">
                      <SelectValue placeholder="+44" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+44">+44</SelectItem>
                      <SelectItem value="+92">+92</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field className="flex-1">
                  <Input
                    placeholder="Phone (000) 000-0000"
                    required
                    className="rounded-l-none rounded-r-lg border-l-0"
                    onChange={(e) => updateField("workPhone", e.target.value)}
                  />
                </Field>
              </div>
              <Field className="flex-1">
                <Input
                  placeholder="License no."
                  required
                  onChange={(e) => updateField("license", e.target.value)}
                />
              </Field>
            </div>
            <Field>
              <Input
                placeholder="Regulatory body"
                required
                onChange={(e) => updateField("regulatoryBody", e.target.value)}
              />
            </Field>
          </form>
          <div className="flex justify-end gap-2 mt-5">
            <button
              type="button"
              disabled={!isFormValid}
              onClick={handleNextStep}
              className={`rounded-sm py-2.5 px-4 text-sm font-semibold text-white
                ${
                  isFormValid
                    ? "bg-[#0E9DD8] hover:bg-[#0b81b3] cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformationForm;
