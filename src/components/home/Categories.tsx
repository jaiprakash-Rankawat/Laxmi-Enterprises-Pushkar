
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { 
  Box, 
  ShoppingBag, 
  PaintBucket, 
  Pipette, 
  Wrench, 
  Shower, 
  Droplet, 
  CircleDashed,
  Bath,
  Hammer
} from "lucide-react";

// Map category IDs to appropriate icons
const getCategoryIcon = (categoryId: string) => {
  switch (categoryId) {
    case "asian-paints":
      return <PaintBucket size={48} />;
    case "jsw-paints":
      return <Pipette size={48} />;
    case "jk-maxx-paints":
      return <PaintBucket size={48} />;
    case "cpvc-pipe":
      return <Wrench size={48} />;
    case "upvc-pipe":
      return <Droplet size={48} />;
    case "pvc-pipe":
      return <Droplet size={48} />;
    case "bath-fittings":
      return <Shower size={48} />;
    case "sanitary-items":
      return <Bath size={48} />;
    case "gi-fittings":
      return <Hammer size={48} />;
    case "extra-items":
      return <ShoppingBag size={48} />;
    default:
      return <CircleDashed size={48} />;
  }
};

// Generate gradient backgrounds based on category
const getCategoryGradient = (index: number) => {
  const gradients = [
    "from-indigo-500 to-purple-500",
    "from-purple-500 to-pink-500",
    "from-pink-500 to-red-500",
    "from-blue-500 to-cyan-500",
    "from-cyan-500 to-teal-500",
    "from-emerald-500 to-green-500",
    "from-amber-500 to-orange-500",
    "from-rose-500 to-red-500",
    "from-sky-500 to-indigo-500",
    "from-violet-500 to-indigo-500",
  ];
  
  return gradients[index % gradients.length];
};

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
                  className={`p-6 flex-1 flex items-center justify-center bg-gradient-to-br ${getCategoryGradient(index)} text-white`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="bg-white/20 rounded-full p-6 backdrop-blur-sm"
                    whileHover={{ 
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {getCategoryIcon(category.id)}
                  </motion.div>
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
