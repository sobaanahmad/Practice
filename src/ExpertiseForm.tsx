import { useState } from "react";
import { Field } from "./components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Plus, Trash } from "lucide-react";
import { z } from "zod";

const experienceSchema = z.object({
  profession: z.string().min(1, "Profession is required"),
  area: z.string().min(1, "Area of expertise is required"),
  expertise: z.string().min(1, "Expertise is required"),
});

interface Experience {
  id: number;
  profession: string;
  area: string;
  expertise: string;
}

interface ExpertiseFormProps {
  onNext: () => void;
  onBack: () => void;
}

const ExpertiseForm: React.FC<ExpertiseFormProps> = ({ onNext, onBack }) => {
  const [experiences, setExperiences] = useState<Experience[]>(() => [
  { id: Date.now(), profession: "", area: "", expertise: "" },
]);

  const updateExperience = (id: number, field: keyof Experience, value: string) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const addExperience = () => {
    setExperiences((prev) => [
      ...prev,
      { id: Date.now(), profession: "", area: "", expertise: "" },
    ]);
  };

  const removeExperience = (id: number) => {
    if (experiences.length === 1) return;
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };

  const isFormValid = experiences.every((exp) =>
    experienceSchema.safeParse(exp).success
  );

  return (
    <div className="shadow-bg rounded-lg w-full max-w-5xl p-6 bg-white mx-auto">
      <h1 className="text-lg font-semibold mb-4">Professional Info</h1>
      {experiences.map((exp, index) => (
        <div key={exp.id} className="mb-6">
          <div className="flex flex-wrap gap-4 mb-3">
            <Field className="flex-1">
              <Select
                onValueChange={(v) => updateExperience(exp.id, "profession", v)}
                value={exp.profession || undefined}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Profession" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="nurse">Nurse</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field className="flex-1">
              <Select
                onValueChange={(v) => updateExperience(exp.id, "area", v)}
                value={exp.area || undefined}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Area of expertise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brain">Brain</SelectItem>
                  <SelectItem value="heart">Heart</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field className="flex-1">
              <Select
                onValueChange={(v) => updateExperience(exp.id, "expertise", v)}
                value={exp.expertise || undefined}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select expertise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="surgeon">Surgeon</SelectItem>
                  <SelectItem value="assistant">Assistant</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <div className="flex gap-7 text-sm font-semibold">
            <button
              type="button"
              className={`flex items-center gap-2 ${
                experiences.length === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-black cursor-pointer"
              }`}
              onClick={() => removeExperience(exp.id)}
              disabled={experiences.length === 1}
            >
              <Trash size={17} />
              Remove Experience
            </button>
            {index === experiences.length - 1 && (
              <button
                type="button"
                className="flex items-center gap-2 text-black cursor-pointer"
                onClick={addExperience}
              >
                <Plus size={17} />
                Add Another
              </button>
            )}
          </div>
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
          disabled={!isFormValid}
          onClick={onNext}
          className={`rounded-sm py-2.5 px-4 text-sm font-semibold text-white ${
            isFormValid
              ? "bg-[#0E9DD8] hover:bg-[#0b81b3] cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default ExpertiseForm;
