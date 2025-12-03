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
} from "@/components/ui/alert-dialog";

interface UploadDocumentsFormProps {
  onBack: () => void;
  onNext: () => void;
}

const UploadDocumentsForm: React.FC<UploadDocumentsFormProps> = ({
  onBack,
  onNext,
}) => {
  const resumeRef = useRef<HTMLInputElement | null>(null);
  const indemnityRef = useRef<HTMLInputElement | null>(null);
  const certificatesRef = useRef<HTMLInputElement | null>(null);
  const otherRefs: React.RefObject<HTMLInputElement | null>[] = Array.from(
    { length: 5 },
    () => React.createRef<HTMLInputElement>()
  );

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [indemnityFile, setIndemnityFile] = useState<File | null>(null);
  const [certificatesFile, setCertificatesFile] = useState<File | null>(null);
  const [otherFiles, setOtherFiles] = useState<(File | null)[]>(
    Array(5).fill(null)
  );

  const [otherNames, setOtherNames] = useState<string[]>(Array(5).fill(""));
  const [showErrors, setShowErrors] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleFileClick = (ref: React.RefObject<HTMLInputElement | null>) => {
    if (ref.current) ref.current.click();
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      if (index === undefined) {
        if (e.target === resumeRef.current) setResumeFile(e.target.files[0]);
        else if (e.target === indemnityRef.current)
          setIndemnityFile(e.target.files[0]);
        else if (e.target === certificatesRef.current)
          setCertificatesFile(e.target.files[0]);
      } else {
        const newOtherFiles = [...otherFiles];
        newOtherFiles[index] = e.target.files[0];
        setOtherFiles(newOtherFiles);
      }
    }
  };

  const handleOtherNameChange = (value: string, index: number) => {
    const newNames = [...otherNames];
    newNames[index] = value;
    setOtherNames(newNames);
  };

  const isFormValid = !!resumeFile && !!indemnityFile && !!certificatesFile;

  const handleNextStep = () => {
    if (isFormValid) {
      setIsDialogOpen(true);
    } else {
      setShowErrors(true);
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex-1 p-6">
        <div className="shadow-bg rounded-lg w-full max-w-5xl p-6 bg-white mx-auto">
          <h1 className="text-lg font-semibold mb-4">
            Upload Required Documents
          </h1>
          <div className="flex gap-35 mb-5">
            <div className="flex flex-col items-left">
              <h1 className="text-md font-semibold text-[#0E9DD8] mb-2">
                Resume
              </h1>
              <div
                onClick={() => handleFileClick(resumeRef)}
                className="w-40 h-40 bg-[#F7F8F8] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100"
              >
                <img src="/upload.png" className="w-6 h-6 mb-3" />
                <p className="text-gray-600 font-semibold mb-1 text-center">
                  {resumeFile ? resumeFile.name : "Upload Doc."}
                </p>
                <p className="text-gray-400 text-xs text-center">
                  {resumeFile
                    ? resumeFile.name
                    : "Max document size allowed 50mb."}
                </p>
              </div>
              {showErrors && !resumeFile && (
                <p className="text-red-500 text-sm mt-1">
                  This document is required!
                </p>
              )}

              <Input
                type="file"
                ref={resumeRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="flex flex-col items-left">
              <h1 className="text-md font-semibold text-[#0E9DD8] mb-2">
                Professional Indemnity Insurance
              </h1>
              <div
                onClick={() => handleFileClick(indemnityRef)}
                className="w-40 h-40 bg-[#F7F8F8] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100"
              >
                <img src="/upload.png" className="w-6 h-6 mb-3" />
                <p className="text-gray-600 font-semibold mb-1 text-center">
                  {indemnityFile ? indemnityFile.name : "Upload Doc."}
                </p>
                <p className="text-gray-400 text-xs text-center">
                  {indemnityFile
                    ? indemnityFile.name
                    : "Max document size allowed 50mb."}
                </p>
              </div>
              {showErrors && !indemnityFile && (
                <p className="text-red-500 text-sm mt-1">
                  This document is required!
                </p>
              )}

              <Input
                type="file"
                ref={indemnityRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="flex flex-col items-left">
              <h1 className="text-md font-semibold text-[#0E9DD8] mb-2">
                Certificates
              </h1>
              <div
                onClick={() => handleFileClick(certificatesRef)}
                className="w-40 h-40 bg-[#F7F8F8] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100"
              >
                <img src="/upload.png" className="w-6 h-6 mb-3" />
                <p className="text-gray-600 font-semibold mb-1 text-center">
                  {certificatesFile ? certificatesFile.name : "Upload Doc."}
                </p>
                <p className="text-gray-400 text-xs text-center">
                  {certificatesFile
                    ? certificatesFile.name
                    : "Max document size allowed 50mb."}
                </p>
              </div>
              {showErrors && !certificatesFile && (
                <p className="text-red-500 text-sm mt-1">
                  This document is required!
                </p>
              )}

              <Input
                type="file"
                ref={certificatesRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          <h1 className="text-lg font-semibold mb-3 mt-5 text-[#0E9DD8]">
            Other Attachments
          </h1>

          {otherRefs.map((ref, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-4 space-y-3 items-center mb-2 w-130"
            >
              <Field className="w-3/5">
                <Input
                  placeholder="Enter doc name"
                  value={otherNames[index]}
                  onChange={(e) => handleOtherNameChange(e.target.value, index)}
                />
              </Field>
              <div
                onClick={() => handleFileClick(ref)}
                className="w-40 h-10 rounded-lg flex flex-row gap-4 justify-center items-center cursor-pointer"
              >
                <img src="/uploadblack.png" className="w-10 h-10 mb-3 mt-1.5" />
                <p className="text-black font-semibold mb-1">
                  {otherFiles[index] ? otherFiles[index]?.name : "Upload Doc."}
                </p>
              </div>
              <Input
                type="file"
                ref={ref}
                onChange={(e) => handleFileChange(e, index)}
                className="hidden"
              />
            </div>
          ))}

          <div className="flex justify-end gap-2 mt-5">
            <button
              type="button"
              onClick={onBack}
              className="cursor-pointer rounded-sm py-2.5 px-4 text-sm text-black bg-[#E7F7FD] hover:bg-[#ccebff] font-semibold"
            >
              Go Back
            </button>
            <button
              type="button"
              onClick={handleNextStep}
              className="rounded-sm py-2.5 px-4 text-sm font-semibold text-white bg-[#0E9DD8] hover:bg-[#0b81b3] cursor-pointer"
            >
              Next Step
            </button>
            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Profile Under Review</AlertDialogTitle>
                  <AlertDialogDescription>
                    Your profile is completed and under review process. You’ll
                    be notified via your personal email when any action is taken
                    on your profile. Thank You!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction
                    onClick={onNext}
                    className="bg-[#0E9DD8] hover:bg-[#0b81b3] text-white cursor-pointer"
                  >
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
