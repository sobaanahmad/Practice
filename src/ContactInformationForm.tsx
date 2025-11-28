import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldGroup,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactInformationForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-lg ml-65 absolute top-34 w-[78vw] h-[100vh] p-5">
      <h1 className="text-[1.2rem] font-semibold mb-2">Profile Image</h1>

      {/* Custom Upload Box */}
      <div
        onClick={handleClick}
        className="w-40 h-40 bg-[#F7F8F8] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100"
      >
        <img src="/upload.png" alt="Upload" className="w-6 h-6 mb-5" />
        <p className="text-gray-600 text-center text-md mb-2 font-semibold">
          {selectedFile ? selectedFile.name : "Upload Image"}
        </p>
        <p className="text-gray-400 text-center text-xs">
          {selectedFile ? selectedFile.name : "Max image size allowed 50mb."}
        </p>
      </div>

      {/* Hidden Input */}
      <Input
        id="picture"
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
      />

      <h1 className="text-[1.2rem] font-semibold mt-6">
        Personal Contact Details
      </h1>

      <div className="w-full max-w-md">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field className="w-[6vw] mt-2 rounded-lg text-gray-600">
                  <Select>
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="Miss" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-md font-semibold">
                      <SelectItem className="cursor-pointer" value="01">
                        Miss
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="02">
                        Mr.
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="03">
                        Mrs.
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="04">
                        Ms.
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="05">
                        Dr.
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="06">
                        Prof.
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field className="w-[19vw] absolute top-69.5 ml-25 text-gray-500">
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="First name"
                    required
                  />
                </Field>
                <Field className="w-[24vw] absolute top-69.5 ml-96 text-gray-500">
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Last name"
                    required
                  />
                </Field>
                <Field className="w-[23vw] absolute top-69.5 ml-185 text-gray-500">
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Email"
                    required
                  />
                </Field>
                <div className="flex mt-0">
                  <Field className="w-[6vw]">
                    <Select defaultValue="+44">
                      <SelectTrigger
                        id="number-select"
                        className="rounded-r-none border-r-0 rounded-l-lg"
                      >
                        <SelectValue placeholder="+44" />
                      </SelectTrigger>
                      <SelectContent className="bg-white rounded-md font-semibold">
                        <SelectItem value="+44">+44</SelectItem>
                        <SelectItem value="+92">+92</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field className="w-[20vw]">
                    <Input
                      id="phone"
                      placeholder="Phone"
                      required
                      className="rounded-l-none rounded-r-lg border-l-0"
                    />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
          </FieldGroup>
          <Field className="w-[75vw] absolute top-103 ml text-gray-500">
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder="Address line 1"
              required
            />
          </Field>
          <Field className="w-[75vw] absolute top-121 ml text-gray-500">
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder="Address line 2"
              required
            />
          </Field>
          <Field className="w-[26vw] mt-36 rounded-lg text-gray-600">
            <Select>
              <SelectTrigger id="checkout-exp-month-ts6">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-md font-semibold">
                <SelectItem className="cursor-pointer" value="01">
                  Pakistan
                </SelectItem>
                <SelectItem className="cursor-pointer" value="02">
                  America
                </SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field className="w-[24vw] mt-36 rounded-lg text-gray-600 ml-96 absolute top-102.5">
            <Select>
              <SelectTrigger id="checkout-exp-month-ts6">
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-md font-semibold">
                <SelectItem className="cursor-pointer" value="01">
                  Punjab
                </SelectItem>
                <SelectItem className="cursor-pointer" value="02">
                  Sindh
                </SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field className="w-[23vw] mt-36 rounded-lg text-gray-600 ml-185 absolute top-102.5">
            <Select>
              <SelectTrigger id="checkout-exp-month-ts6">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-md font-semibold">
                <SelectItem className="cursor-pointer" value="01">
                  Lahore
                </SelectItem>
                <SelectItem className="cursor-pointer" value="02">
                  Karachi
                </SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field className="w-[26vw] absolute top-155 ml-0 text-gray-500">
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder="Zip code"
              required
            />
          </Field>
        </form>
      </div>
    </div>
  );
};

export default ContactInformationForm;
