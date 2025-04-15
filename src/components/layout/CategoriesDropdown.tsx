
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const CategoriesDropdown = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
        className="text-white hover:text-white transition-colors flex items-center font-medium"
      >
        Products
        <svg
          className={`w-4 h-4 ml-1 transition-transform ${
            isCategoriesOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isCategoriesOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-card z-50 overflow-hidden border border-slate-100 animate-fade-in">
          <div className="p-2 grid gap-1">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="px-4 py-2 hover:bg-blue-50 rounded-md block text-gray-700 hover:text-navy"
                onClick={() => setIsCategoriesOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
