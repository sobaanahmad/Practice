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

interface ContactInformationFormProps {
  onNext?: () => void;
}
const ContactInformationForm: React.FC<ContactInformationFormProps> = ({
  onNext,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleClick = () => fileInputRef.current?.click();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex-1 p-6">
        <div className="shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-lg w-full max-w-5xl p-6 bg-white mx-auto">
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
          <h1 className="text-lg font-semibold mb-4">Personal Contact Details</h1>
          <form className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Field className="w-20 font-semibold">
                <Select>
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
                <Input placeholder="First name" required />
              </Field>
              <Field className="flex-1">
                <Input placeholder="Last name" required />
              </Field>
              <Field className="flex-1">
                <Input placeholder="Email" required />
              </Field>
            </div>
            <div className="flex gap-0 items-center">
              <Field className="w-20 font-semibold">
                <Select defaultValue="+44">
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
                  placeholder="Phone"
                  required
                  className="rounded-l-none rounded-r-lg border-l-0"
                />
              </Field>
            </div>
            <Field>
              <Input placeholder="Address line 1" required />
            </Field>
            <Field>
              <Input placeholder="Address line 2" required />
            </Field>
            <div className="flex flex-wrap gap-4">
              <Field className="flex-1">
                <Select>
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
                <Select>
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
                <Select>
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
            <Field className="flex-1">
              <Input placeholder="Zip code" required />
            </Field>
            <h1 className="text-lg font-semibold mt-4">Professional Contact Details</h1>
            <div className="flex flex-wrap gap-4">
              <Field className="flex-1">
                <Input placeholder="Professional email" required />
              </Field>
              <div className="flex gap-0 items-center">
                <Field className="w-19 font-semibold">
                  <Select defaultValue="+44">
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
                  />
                </Field>
              </div>
              <Field className="flex-1">
                <Input placeholder="License no." required />
              </Field>
            </div>
            <Field>
              <Input placeholder="Regulatory body" required />
            </Field>
          </form>
          <div className="flex justify-end gap-2 mt-5">
            <button
              type="button"
              onClick={onNext}
              className="cursor-pointer rounded-sm py-2.5 px-4 text-sm text-white bg-[#0E9DD8] hover:bg-[#0b81b3] font-semibold"
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
