import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import ContactInformationForm from "./ContactInformationForm";
import ExpertiseForm from "./ExpertiseForm";
import UploadDocuments from "./UploadDocumentsForm";

export function TabsTop() {
  const [activeTab, setActiveTab] = useState("contact-information");

  // Define the order of tabs
  const tabOrder = ["contact-information", "expertise", "upload-documents"];

  const handleNext = () => {
    const currentIndex = tabOrder.indexOf(activeTab);
    if (currentIndex < tabOrder.length - 1) {
      setActiveTab(tabOrder[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = tabOrder.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabOrder[currentIndex - 1]);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-5">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="contact-information" className="font-normal cursor-pointer">
            Contact Information
          </TabsTrigger>
          <TabsTrigger value="expertise" className="font-normal cursor-pointer">
            Expertise
          </TabsTrigger>
          <TabsTrigger value="upload-documents" className="font-normal cursor-pointer">
            Upload Documents
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contact-information">
          <ContactInformationForm onNext={handleNext} />
        </TabsContent>

        <TabsContent value="expertise">
          <ExpertiseForm onNext={handleNext} onBack={handleBack} />
        </TabsContent>

        <TabsContent value="upload-documents">
          <UploadDocuments onBack={handleBack} onNext={handleNext}/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
