
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import ServiceCard from "../services/ServiceCard";

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-orange font-semibold uppercase tracking-wider bg-orange/10 px-3 py-1 rounded-full">Professional Services</span>
          <h2 className="text-3xl font-bold text-navy mt-2">Our Services</h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-navy to-lightblue rounded-full my-4"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Connect with skilled professionals for all your painting and plumbing needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <Link to={`/services?type=${service.id}`} key={service.id}>
              <ServiceCard service={service} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
