
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-r from-navy to-lightblue"
        style={{
          backgroundImage: "url('/placeholder.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-28 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block animate-pulse">
            <span className="bg-orange text-white text-sm font-bold px-4 py-1.5 rounded-full">Premium Quality</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Transform Your Space with 
            <span className="bg-gradient-to-r from-orange via-amber to-yellow-300 bg-clip-text text-transparent ml-2">
              Premium 
            </span>
            <br className="hidden md:block" />
            Quality Products
          </h1>
          
          <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Your one-stop destination for quality painting and plumbing supplies. 
            From Asian Paints to premium bath fittings, we have everything you need.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/products">
              <Button className="btn-gradient px-8 py-6 text-lg font-semibold">
                Explore Products
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                Our Services
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="glass-effect p-4 rounded-xl text-white">
              <div className="text-3xl font-bold text-amber">10+</div>
              <div className="text-sm mt-1">Product Categories</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-white">
              <div className="text-3xl font-bold text-teal">1000+</div>
              <div className="text-sm mt-1">Quality Products</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-white">
              <div className="text-3xl font-bold text-orange">5★</div>
              <div className="text-sm mt-1">Customer Rating</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-white">
              <div className="text-3xl font-bold text-rose">24/7</div>
              <div className="text-sm mt-1">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
