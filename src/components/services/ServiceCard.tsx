
import { Service } from "@/data/services";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 h-full hover:shadow-xl transition-all duration-300 group">
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name} 
          className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-3">{service.name}</h3>
        <p className="text-gray-600">{service.description}</p>
        
        <div className="mt-4 inline-flex text-sm text-orange font-medium items-center group-hover:translate-x-2 transition-transform">
          Learn more
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
