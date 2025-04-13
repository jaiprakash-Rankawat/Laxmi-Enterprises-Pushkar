
import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import UserMenu from "./UserMenu";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isMenuOpen, toggleMenu }: MobileMenuProps) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden bg-gray-900 border-t border-gray-700 animate-fade-in">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex flex-col space-y-3">
          <Link
            to="/"
            className="text-white py-3 border-b border-gray-700"
            onClick={toggleMenu}
          >
            Home
          </Link>

          <button
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className="text-white py-3 border-b border-gray-700 text-left flex justify-between items-center"
          >
            Products
            <svg
              className={`w-4 h-4 transition-transform ${
                isCategoriesOpen ? "transform rotate-180" : ""
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
            <div className="pl-4 space-y-2 bg-gray-800 p-4 rounded-lg animate-zoom-in">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/products/${category.id}`}
                  className="block py-2 text-white"
                  onClick={toggleMenu}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/services"
            className="text-white py-3 border-b border-gray-700"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white py-3 border-b border-gray-700"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/admin/login"
            className="text-white py-3 border-b border-gray-700"
            onClick={toggleMenu}
          >
            Admin
          </Link>
          <div className="py-3">
            <UserMenu />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
