
import { Painter } from "@/data/painters";
import { Plumber } from "@/data/plumbers";
import ProfessionalCard from "./ProfessionalCard";
import ServiceTypeSelector from "./ServiceTypeSelector";

interface ServiceProfessionalsProps {
  service: 'painters' | 'plumbers';
  onServiceChange: (service: 'painters' | 'plumbers') => void;
  serviceProfessionals: Painter[] | Plumber[];
  typeFromUrl: string | null;
}

const ServiceProfessionals = ({ 
  service, 
  onServiceChange, 
  serviceProfessionals,
  typeFromUrl
}: ServiceProfessionalsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
      <h2 className="text-2xl font-bold text-navy mb-6">
        Available {service === 'painters' ? 'Painters' : 'Plumbers'}
      </h2>
      
      <ServiceTypeSelector 
        service={service} 
        onServiceChange={onServiceChange} 
        typeFromUrl={typeFromUrl}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceProfessionals.map((professional) => (
          <ProfessionalCard 
            key={professional.id} 
            professional={professional} 
            serviceType={service} 
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceProfessionals;
