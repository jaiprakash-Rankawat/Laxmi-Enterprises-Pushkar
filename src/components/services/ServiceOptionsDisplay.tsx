
import { Service } from "@/data/services";
import { Button } from "@/components/ui/button";

interface ServiceOptionsDisplayProps {
  services: Service[];
  currentService: 'painters' | 'plumbers';
  onServiceSelect: (service: 'painters' | 'plumbers') => void;
}

const ServiceOptionsDisplay = ({ services, currentService, onServiceSelect }: ServiceOptionsDisplayProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {services.map((serviceItem) => (
        <div key={serviceItem.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src={serviceItem.image}
              alt={serviceItem.name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-navy mb-3">{serviceItem.name}</h3>
            <p className="text-gray-600 mb-4">{serviceItem.description}</p>
            <Button 
              onClick={() => onServiceSelect(serviceItem.id as 'painters' | 'plumbers')}
              className={currentService === serviceItem.id ? "bg-navy" : "bg-lightblue hover:bg-navy"}
            >
              Request {serviceItem.name}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceOptionsDisplay;
