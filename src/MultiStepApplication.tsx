import { useState } from "react";
import ContactInformationForm from "./ContactInformationForm";

export default function MultiStepApplication() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="p-6">
      <div className="flex gap-2 mt-12">
        <button
          onClick={() => setCurrentStep(1)}
          className={`px-5 py-2 rounded-lg font-semibold ml-100 cursor-pointer
            ${currentStep === 1 ? "bg-white text-gray" : "bg-gray-200"}`}
        >
          Contact Information
        </button>
        <button
          disabled
          className="px-5 py-2 rounded-lg bg-gray-300 text-gray-500 cursor-not-allowed"
        >
          Expertise
        </button>
        <button
          disabled
          className="px-5 py-2 rounded-lg bg-gray-300 text-gray-500 cursor-not-allowed"
        >
          Upload Documents
        </button>
      </div>
      <div>
        {currentStep === 1 && <ContactInformationForm />}
        {currentStep === 2 && (
          <div className="p-6 border rounded-xl">
            Expertise form will go here
          </div>
        )}
        {currentStep === 3 && (
          <div className="p-6 border rounded-xl">
            Upload Documents form will go here
          </div>
        )}
      </div>
    </div>
  );
}
