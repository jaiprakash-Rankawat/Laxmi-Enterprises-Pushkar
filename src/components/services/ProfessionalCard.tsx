
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Clock, Phone } from "lucide-react";
import { Painter } from "@/data/painters";
import { Plumber } from "@/data/plumbers";

type Professional = Painter | Plumber;

interface ProfessionalCardProps {
  professional: Professional;
  serviceType: 'painters' | 'plumbers';
}

const ProfessionalCard = ({ professional, serviceType }: ProfessionalCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex">
        <div className="w-1/3 bg-gray-200">
          <img 
            src={professional.image} 
            alt={professional.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-navy">{professional.name}</h3>
            <div className="flex items-center bg-blue-50 px-2 py-0.5 rounded text-xs">
              <Star className="h-3 w-3 text-yellow-500 mr-1" />
              <span>Rank #{professional.rank}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">{professional.specialization}</p>
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <Clock className="h-4 w-4 mr-1" />
            <span>{professional.experience} years experience</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <a href={`tel:${professional.phone}`}>
              <Button size="sm" className="bg-navy hover:bg-lightblue">
                <Phone className="h-4 w-4 mr-1" />
                Call
              </Button>
            </a>
            <Link to={`/services/${serviceType}/${professional.id}`}>
              <Button size="sm" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                View Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
