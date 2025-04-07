
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-navy text-white">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(26, 54, 93, 0.95), rgba(26, 54, 93, 0.8)), url('/placeholder.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your One-Stop Shop for
            <span className="text-lightblue"> Painting </span>
            and
            <span className="text-orange"> Plumbing </span>
            Needs
          </h1>
          
          <p className="mt-6 text-xl text-gray-200">
            Quality products and professional services for all your home improvement projects. Browse our wide selection of paints, plumbing supplies, and more.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button className="bg-lightblue hover:bg-blue-600 text-white px-8 py-6 rounded-md text-lg">
                Shop Products
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-md text-lg">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
