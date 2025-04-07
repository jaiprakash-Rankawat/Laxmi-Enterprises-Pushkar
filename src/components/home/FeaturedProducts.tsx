
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "../products/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy">Featured Products</h2>
            <p className="mt-2 text-gray-600">Discover our most popular products</p>
          </div>
          <Link to="/products" className="mt-4 md:mt-0">
            <Button variant="outline" className="text-navy border-navy hover:bg-navy hover:text-white flex items-center">
              View All Products 
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
