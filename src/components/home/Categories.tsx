
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Categories = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-indigo-600 font-semibold uppercase tracking-wider bg-indigo-100 px-4 py-1.5 rounded-full shadow-sm"
          >
            Browse
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mt-3"
          >
            Shop by Category
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full my-4"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            Explore our wide range of quality paint and plumbing products by category
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.15 * index,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 10,
                transition: { duration: 0.3 }
              }}
            >
              <Link 
                to={`/products/${category.id}`}
                className="bg-white rounded-xl overflow-hidden transition-all duration-300 flex flex-col group h-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_15px_30px_rgba(107,70,193,0.2)]"
              >
                <motion.div 
                  className="p-6 flex-1 flex items-center justify-center bg-gradient-to-b from-indigo-50 to-purple-50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.img 
                    src={category.image} 
                    alt={category.name} 
                    className="h-36 w-auto object-contain"
                    whileHover={{ rotateZ: 5 }}
                    transition={{ type: "spring", damping: 10 }}
                  />
                </motion.div>
                <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center flex items-center justify-between">
                  <span className="text-sm font-medium">{category.name}</span>
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
