
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(30, 58, 138, 0.9), rgba(37, 99, 235, 0.8)), url('/placeholder.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Transform Your Space with 
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent"> Premium </span>
            Products
          </h1>
          
          <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Your one-stop destination for quality painting and plumbing supplies. From Asian Paints to premium bath fittings, we have everything you need.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/products">
              <Button className="bg-white hover:bg-white/90 text-blue-600 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all font-medium">
                Shop Products
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                Our Services
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Product Categories</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm">Quality Products</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white">
              <div className="text-2xl font-bold">5★</div>
              <div className="text-sm">Customer Rating</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
