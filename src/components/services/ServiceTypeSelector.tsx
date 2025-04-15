
import { useState, useEffect } from "react";

interface ServiceTypeSelectorProps {
  service: 'painters' | 'plumbers';
  onServiceChange: (service: 'painters' | 'plumbers') => void;
  typeFromUrl: string | null;
}

const ServiceTypeSelector = ({ service, onServiceChange, typeFromUrl }: ServiceTypeSelectorProps) => {
  // Update service state when URL parameter changes
  useEffect(() => {
    if (typeFromUrl === 'painters' || typeFromUrl === 'plumbers') {
      onServiceChange(typeFromUrl);
    }
  }, [typeFromUrl, onServiceChange]);

  return (
    <div className="mb-6">
      <div className="flex border rounded-lg overflow-hidden">
        <button
          className={`flex-1 py-3 px-4 text-center font-medium ${
            service === 'painters' 
              ? 'bg-navy text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onServiceChange('painters')}
        >
          Painters
        </button>
        <button
          className={`flex-1 py-3 px-4 text-center font-medium ${
            service === 'plumbers' 
              ? 'bg-navy text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onServiceChange('plumbers')}
        >
          Plumbers
        </button>
      </div>
    </div>
  );
};

export default ServiceTypeSelector;
