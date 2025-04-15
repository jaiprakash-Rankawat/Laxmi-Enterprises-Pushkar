
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { services } from "@/data/services";
import { painters } from "@/data/painters";
import { plumbers } from "@/data/plumbers";

// Newly created components
import ServicesHeader from "@/components/services/ServicesHeader";
import ServiceOptionsDisplay from "@/components/services/ServiceOptionsDisplay";
import ServiceProfessionals from "@/components/services/ServiceProfessionals";
import ServiceRequestForm from "@/components/services/ServiceRequestForm";

const Services = () => {
  const [searchParams] = useSearchParams();
  const typeFromUrl = searchParams.get('type');
  
  const [service, setService] = useState<'painters' | 'plumbers'>(
    typeFromUrl === 'painters' || typeFromUrl === 'plumbers' 
      ? typeFromUrl 
      : 'painters'
  );
  
  // Get the appropriate service professionals based on selected service
  const serviceProfessionals = service === 'painters' ? painters : plumbers;
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ServicesHeader />
          
          <ServiceOptionsDisplay 
            services={services} 
            currentService={service} 
            onServiceSelect={setService} 
          />
          
          <ServiceProfessionals 
            service={service} 
            onServiceChange={setService} 
            serviceProfessionals={serviceProfessionals}
            typeFromUrl={typeFromUrl}
          />
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navy mb-6">
              Request a {service === 'painters' ? 'Painter' : 'Plumber'}
            </h2>
            
            <ServiceRequestForm service={service} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
