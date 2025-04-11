
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import SearchOverlay from "@/components/search/SearchOverlay";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cart } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isCategoriesOpen) setIsCategoriesOpen(false);
  };

  return (
    <header className="bg-gray-900 shadow-soft sticky top-0 z-40  border-b-2 border-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="bg-white bg-clip-text text-transparent">
              Laxmi Enterprises Pushkar
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-white hover:underline hover:underline-offset-4 decoration-yellow-400 transition-colors font-medium"
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="text-white hover:text-white  transition-colors flex items-center font-medium"
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

            <Link
              to="/services"
              className="text-white hover:text-white  transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-white  transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              to="/admin/login"
              className="text-white hover:text-white  transition-colors font-medium"
            >
              Admin
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-50 hover:text-white  text-white"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full hover:bg-blue-50 hover:text-white   text-white"
              >
                <ShoppingCart className="h-5 w-5" />
                {cart.totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange text-white text-xs h-5 w-5 rounded-full flex items-center justify-center font-bold shadow-soft">
                    {cart.totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            <UserMenu />
          </nav>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-blue-50 mr-2 rounded-full text-white"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart" className="mr-4 relative">
              <ShoppingCart className="h-5 w-5 text-white" />
              {cart.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange text-white text-xs h-5 w-5 rounded-full flex items-center justify-center font-bold shadow-soft">
                  {cart.totalItems}
                </span>
              )}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="hover:bg-blue-50 rounded-full text-white"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
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
      )}

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
};

export default Navbar;
