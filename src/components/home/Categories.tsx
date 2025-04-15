
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
  Droplet, 
  CircleDashed,
  Bath,
  Hammer,
  Waves
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
      return <Waves size={48} />;
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

// Generate vibrant gradient backgrounds based on category
const getCategoryGradient = (index: number) => {
  const gradients = [
    "from-violet-600 to-indigo-600", // Rich purple to indigo
    "from-rose-500 to-pink-600", // Rose to pink
    "from-amber-500 to-orange-600", // Amber to orange
    "from-cyan-500 to-blue-600", // Cyan to blue
    "from-emerald-500 to-teal-600", // Emerald to teal
    "from-fuchsia-500 to-purple-600", // Fuchsia to purple
    "from-sky-500 to-indigo-600", // Sky to indigo
    "from-amber-400 to-red-600", // Amber to red
    "from-lime-400 to-emerald-600", // Lime to emerald
    "from-blue-500 to-violet-600", // Blue to violet
  ];
  
  return gradients[index % gradients.length];
};

// Generate complementary text colors
const getTextColor = (index: number) => {
  const textColors = [
    "text-indigo-50", "text-pink-50", "text-orange-50", 
    "text-blue-50", "text-teal-50", "text-purple-50",
    "text-indigo-50", "text-red-50", "text-emerald-50", "text-violet-50"
  ];
  
  return textColors[index % textColors.length];
};

const Categories = () => {
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
            Explore
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-3"
          >
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
              Shop by Category
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
                rotateY: 8,
                z: 20,
                transition: { duration: 0.3 }
              }}
            >
              <Link 
                to={`/products/${category.id}`}
                className="bg-white rounded-xl overflow-hidden transition-all duration-300 flex flex-col group h-full shadow-lg hover:shadow-2xl border border-gray-100"
              >
                <motion.div 
                  className={`p-6 flex-1 flex items-center justify-center bg-gradient-to-br ${getCategoryGradient(index)}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="bg-white/30 backdrop-blur-md rounded-full p-6 shadow-inner border border-white/40"
                    whileHover={{ 
                      rotate: [0, -10, 10, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <div className="text-white drop-shadow-lg">
                      {getCategoryIcon(category.id)}
                    </div>
                  </motion.div>
                </motion.div>
                <div className={`p-4 text-white text-center flex items-center justify-between bg-gradient-to-r ${getCategoryGradient(index)}`}>
                  <span className="text-sm font-medium">{category.name}</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="rounded-full bg-white/20 p-1"
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
