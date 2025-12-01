import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface UploadDocumentsFormProps {
  onBack: () => void;
  onNext: () => void;
}

const UploadDocumentsForm: React.FC<UploadDocumentsFormProps> = ({
  onBack,
  onNext,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleClick = () => fileInputRef.current?.click();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0)
      setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="flex">
      <div className="flex-1 p-6">
        <div className="shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-lg w-full max-w-5xl p-6 bg-white mx-auto">
          <h1 className="text-lg font-semibold mb-4">
            Upload Required Documents
          </h1>
          <div className="flex gap-35">
            <div className="flex flex-col items-left">
              <h1 className="text-md font-semibold text-[#0E9DD8] mb-2">
                Resume
              </h1>
              <div
                onClick={handleClick}
                className="w-40 h-40 bg-[#F7F8F8] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100"
              >
                <img src="/upload.png" alt="Upload" className="w-6 h-6 mb-3" />
                <p className="text-gray-600 text-center font-semibold mb-1">
                  {selectedFile ? selectedFile.name : "Upload Doc."}
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
            </div>
            <div className="flex flex-col items-left">
              <h1 className="text-md font-semibold text-[#0E9DD8] mb-2">
                Professional Indemnity Insurance
              </h1>
              <div
                onClick={handleClick}
                className="w-40 h-40 bg-[#F7F8F8] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100"
              >
                <img src="/upload.png" alt="Upload" className="w-6 h-6 mb-3" />
                <p className="text-gray-600 text-center font-semibold mb-1">
                  {selectedFile ? selectedFile.name : "Upload Doc."}
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
            </div>
            <div className="flex flex-col items-left">
              <h1 className="text-md font-semibold text-[#0E9DD8] mb-2">
                Certificates
              </h1>
              <div
                onClick={handleClick}
                className="w-40 h-40 bg-[#F7F8F8] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100"
              >
                <img src="/upload.png" alt="Upload" className="w-6 h-6 mb-3" />
                <p className="text-gray-600 text-center font-semibold mb-1">
                  {selectedFile ? selectedFile.name : "Upload Doc."}
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
            </div>
          </div>

          <h1 className="text-lg font-semibold mb-3 mt-5 text-[#0E9DD8]">
            Other Attachments
          </h1>

          <form className="space-y-18 max-w-120">
            <div className="flex flex-wrap gap-4 space-y-5">
              <Field className="flex-1">
                <Input placeholder="Enter doc name" required />
              </Field>
              <div
                onClick={handleClick}
                className="w-40 h-10 rounded-lg flex flex-row gap-4 justify-center items-center cursor-pointer"
              >
                <img
                  src="/uploadblack.png"
                  alt="Upload"
                  className="w-10 h-10 mb-3 mt-1.5"
                />
                <p className="text-black text-center font-semibold mb-1">
                  {selectedFile ? selectedFile.name : "Upload Doc."}
                </p>
              </div>
              <Input
                type="file"
                ref={fileInputRef}
                onChange={handleChange}
                className="hidden"
              />
            </div>
          </form>
          <form className="space-y-18 max-w-120">
            <div className="flex flex-wrap gap-4 space-y-5">
              <Field className="flex-1">
                <Input placeholder="Enter doc name" required />
              </Field>
              <div
                onClick={handleClick}
                className="w-40 h-10 rounded-lg flex flex-row gap-4 justify-center items-center cursor-pointer"
              >
                <img
                  src="/uploadblack.png"
                  alt="Upload"
                  className="w-10 h-10 mb-3 mt-1.5"
                />
                <p className="text-black text-center font-semibold mb-1">
                  {selectedFile ? selectedFile.name : "Upload Doc."}
                </p>
              </div>
              <Input
                type="file"
                ref={fileInputRef}
                onChange={handleChange}
                className="hidden"
              />
            </div>
          </form>
          <form className="space-y-18 max-w-120">
            <div className="flex flex-wrap gap-4 space-y-5">
              <Field className="flex-1">
                <Input placeholder="Enter doc name" required />
              </Field>
              <div
                onClick={handleClick}
                className="w-40 h-10 rounded-lg flex flex-row gap-4 justify-center items-center cursor-pointer"
              >
                <img
                  src="/uploadblack.png"
                  alt="Upload"
                  className="w-10 h-10 mb-3 mt-1.5"
                />
                <p className="text-black text-center font-semibold mb-1">
                  {selectedFile ? selectedFile.name : "Upload Doc."}
                </p>
              </div>
              <Input
                type="file"
                ref={fileInputRef}
                onChange={handleChange}
                className="hidden"
              />
            </div>
          </form>
          <form className="space-y-18 max-w-120">
            <div className="flex flex-wrap gap-4 space-y-5">
              <Field className="flex-1">
                <Input placeholder="Enter doc name" required />
              </Field>
              <div
                onClick={handleClick}
                className="w-40 h-10 rounded-lg flex flex-row gap-4 justify-center items-center cursor-pointer"
              >
                <img
                  src="/uploadblack.png"
                  alt="Upload"
                  className="w-10 h-10 mb-3 mt-1.5"
                />
                <p className="text-black text-center font-semibold mb-1">
                  {selectedFile ? selectedFile.name : "Upload Doc."}
                </p>
              </div>
              <Input
                type="file"
                ref={fileInputRef}
                onChange={handleChange}
                className="hidden"
              />
            </div>
          </form>
          <form className="space-y-18 max-w-120">
            <div className="flex flex-wrap gap-4 space-y-5">
              <Field className="flex-1">
                <Input placeholder="Enter doc name" required />
              </Field>
              <div
                onClick={handleClick}
                className="w-40 h-10 rounded-lg flex flex-row gap-4 justify-center items-center cursor-pointer"
              >
                <img
                  src="/uploadblack.png"
                  alt="Upload"
                  className="w-10 h-10 mb-3 mt-1.5"
                />
                <p className="text-black text-center font-semibold mb-1">
                  {selectedFile ? selectedFile.name : "Upload Doc."}
                </p>
              </div>
              <Input
                type="file"
                ref={fileInputRef}
                onChange={handleChange}
                className="hidden"
              />
            </div>
          </form>
          <div className="flex justify-end gap-2 mt-5">
            <button
              type="button"
              onClick={onBack}
              className="cursor-pointer rounded-sm py-2.5 px-4 text-sm text-black bg-[#E7F7FD] hover:bg-[#ccebff] font-semibold"
            >
              Go Back
            </button>
            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <AlertDialogTrigger asChild>
                <button
                  type="button"
                  onClick={() => setIsDialogOpen(true)}
                  className="cursor-pointer rounded-sm py-2.5 px-4 text-sm text-white bg-[#0E9DD8] hover:bg-[#0b81b3] font-semibold"
                >
                  Next Step
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Profile Under Review</AlertDialogTitle>
                  <AlertDialogDescription>
                    Your profile is completed and under review process. You’ll
                    be notified via your personal email address you’ve given,
                    when any action is taken on your profile. Thank You!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction onClick={onNext}className="bg-[#0E9DD8] hover:bg-[#0b81b3] text-white cursor-pointer">
                    Close Dialogue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentsForm;
