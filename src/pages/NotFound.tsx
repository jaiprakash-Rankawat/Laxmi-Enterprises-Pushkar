
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ShoppingBag, Phone, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="text-center max-w-lg p-8 bg-white rounded-xl shadow-md">
        <div className="relative mb-6 mx-auto w-32 h-32">
          <div className="absolute inset-0 bg-orange/10 rounded-full animate-ping opacity-75"></div>
          <div className="relative flex items-center justify-center w-32 h-32 bg-orange/20 rounded-full">
            <span className="text-6xl font-bold text-navy">404</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-navy">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! We couldn't find that page</p>
        <p className="text-gray-500 mb-8">
          The page you're looking for might have been moved, deleted, or doesn't exist.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/">
            <Button 
              className="w-full bg-navy hover:bg-lightblue text-white flex items-center justify-center"
            >
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>
          
          <Link to="/products">
            <Button 
              variant="outline"
              className="w-full border-navy text-navy hover:bg-navy hover:text-white flex items-center justify-center"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Browse Products
            </Button>
          </Link>
        </div>
        
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/contact">
            <Button 
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </Link>
          
          <Link to="/search">
            <Button 
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center"
            >
              <Search className="mr-2 h-4 w-4" />
              Search Site
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
