
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "../products/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center">
          <div>
            <span className="text-orange font-semibold uppercase tracking-wider bg-orange/10 px-3 py-1 rounded-full">Featured</span>
            <h2 className="text-3xl font-bold text-navy mt-2">
              High-Demand Products
            </h2>
            <p className="mt-2 text-gray-600">
              Discover our most popular products
            </p>
          </div>
          <Link to="/products" className="mt-4 md:mt-0">
            <Button
              variant="outline"
              className="text-navy border-navy hover:bg-navy hover:text-white flex items-center group"
            >
              View All Products
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
