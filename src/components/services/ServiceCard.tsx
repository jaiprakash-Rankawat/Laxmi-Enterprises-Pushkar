
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 h-full">
      <div className="h-48 bg-gray-100">
        <img 
          src={service.image} 
          alt={service.name} 
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-3">{service.name}</h3>
        <p className="text-gray-600">{service.description}</p>
        
        <div className="mt-4 inline-flex text-sm text-orange font-medium items-center">
          Learn more
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
