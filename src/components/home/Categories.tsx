
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-orange font-semibold uppercase tracking-wider bg-orange/10 px-3 py-1 rounded-full">Browse</span>
          <h2 className="text-3xl font-bold text-navy mt-2">Shop by Category</h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-navy to-lightblue rounded-full my-4"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of quality paint and plumbing products by category
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {categories.map((category) => (
            <Link 
              to={`/products/${category.id}`} 
              key={category.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col group"
            >
              <div className="p-4 flex-1 flex items-center justify-center bg-gray-50">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="h-36 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3 bg-gradient-to-r from-navy to-lightblue text-white text-center flex items-center justify-between">
                <span className="text-sm font-medium">{category.name}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
