
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Professional {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address: string;
  experience: number;
  specialization: string;
  rank: number;
  image: string;
}

interface ProfessionalFormProps {
  professional?: Professional;
  onSubmit: (data: Partial<Professional>) => void;
  onCancel: () => void;
  submitLabel: string;
  professionalType: string;
}

const ProfessionalForm = ({
  professional,
  onSubmit,
  onCancel,
  submitLabel,
  professionalType
}: ProfessionalFormProps) => {
  const [formData, setFormData] = useState<Partial<Professional>>(
    professional || {
      name: "",
      phone: "",
      email: "",
      address: "",
      experience: 0,
      specialization: "",
      rank: 0,
      image: "/placeholder.svg"
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type } = e.target;
    const fieldName = id.replace("edit-", "");
    const fieldValue = type === "number" ? parseInt(value) : value;
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="name" className="text-right">
          Name
        </label>
        <Input
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="phone" className="text-right">
          Phone
        </label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="email" className="text-right">
          Email
        </label>
        <Input
          id="email"
          value={formData.email || ""}
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="address" className="text-right">
          Address
        </label>
        <Input
          id="address"
          value={formData.address}
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="experience" className="text-right">
          Experience (years)
        </label>
        <Input
          id="experience"
          type="number"
          value={formData.experience}
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="specialization" className="text-right">
          Specialization
        </label>
        <Input
          id="specialization"
          value={formData.specialization}
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={handleSubmit} className="bg-navy hover:bg-lightblue">{submitLabel}</Button>
      </div>
    </div>
  );
};

export default ProfessionalForm;
