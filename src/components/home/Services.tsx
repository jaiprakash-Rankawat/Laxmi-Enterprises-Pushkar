
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import ServiceCard from "../services/ServiceCard";

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-navy">Our Services</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Connect with skilled professionals for all your painting and plumbing needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <Link to={`/services/${service.id}`} key={service.id}>
              <ServiceCard service={service} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
