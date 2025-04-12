
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-6xl font-bold mb-4 text-navy">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! We couldn't find that page</p>
        <p className="text-gray-500 mb-8">
          The page you're looking for might have been moved, deleted, or doesn't exist.
        </p>
        <div className="space-y-4">
          <a 
            href="/" 
            className="block w-full bg-navy hover:bg-lightblue text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Return to Home
          </a>
          <a 
            href="/products" 
            className="block w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors"
          >
            Browse Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
