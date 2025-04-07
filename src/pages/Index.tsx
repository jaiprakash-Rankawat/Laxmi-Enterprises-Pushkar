
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Services from "@/components/home/Services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const Index = () => {
  return (
    <div>
      <Hero />
      
      {/* Categories Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange font-semibold uppercase tracking-wider">Browse Collections</span>
            <h2 className="text-3xl font-bold text-navy mt-2">Shop by Category</h2>
            <div className="section-divider"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Explore our wide selection of premium products for all your painting and plumbing needs</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="group"
              >
                <div className="bg-gray-50 rounded-xl overflow-hidden aspect-square flex items-center justify-center shadow-soft card-hover-effect border border-slate-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover img-zoom"
                  />
                </div>
                <h3 className="mt-4 text-center font-medium text-navy group-hover:text-orange transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <FeaturedProducts />
      
      <Services />
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-navy to-lightblue py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Get all the supplies you need for your painting and plumbing projects. Our experts are always ready to help you create your dream space.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products">
              <Button className="btn-gradient px-8 py-6 text-lg">
                Shop Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
