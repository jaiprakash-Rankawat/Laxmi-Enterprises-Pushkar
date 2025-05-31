
import { Link } from "react-router-dom";
import { categories, getProductsByCategory } from "@/data/products";
import { ArrowRight, MessageCircle, Store } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Categories = () => {
  const generateWhatsAppLink = (productName: string, productPrice: number) => {
    const message = `Hi! I'm interested in ordering ${productName} for ₹${productPrice.toFixed(2)}. Can you please provide more details?`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="py-16 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-indigo-600 font-semibold uppercase tracking-wider bg-indigo-100 px-4 py-1.5 rounded-full shadow-sm"
          >
            Shop Now
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-3"
          >
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
              Products by Category
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 150 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-500 rounded-full my-4"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            Browse our products by category. Order on WhatsApp or visit our shop to purchase.
          </motion.p>
        </div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categoryProducts = getProductsByCategory(category.id).slice(0, 4); // Show first 4 products per category
            
            if (categoryProducts.length === 0) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <Link 
                      to={`/products/${category.id}`}
                      className="text-white hover:text-yellow-300 transition-colors flex items-center text-sm"
                    >
                      View All <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryProducts.map((product, productIndex) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.1 * productIndex 
                        }}
                        className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="aspect-square bg-white flex items-center justify-center p-4">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        
                        <div className="p-4">
                          <h4 className="font-medium text-gray-900 mb-1 line-clamp-2 text-sm">
                            {product.name}
                          </h4>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-lg font-bold text-violet-600">
                              ₹{product.price.toFixed(2)}
                            </span>
                            {product.oldPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                ₹{product.oldPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex gap-2">
                            <a
                              href={generateWhatsAppLink(product.name, product.price)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <Button 
                                size="sm" 
                                className="w-full bg-green-600 hover:bg-green-700 text-white text-xs"
                              >
                                <MessageCircle className="h-3 w-3 mr-1" />
                                WhatsApp
                              </Button>
                            </a>
                            <Link to="/contact" className="flex-1">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="w-full border-violet-600 text-violet-600 hover:bg-violet-50 text-xs"
                              >
                                <Store className="h-3 w-3 mr-1" />
                                Shop
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
