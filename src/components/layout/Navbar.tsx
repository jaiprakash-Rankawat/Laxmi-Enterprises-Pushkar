
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { categories } from "@/data/products";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { cart } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isCategoriesOpen) setIsCategoriesOpen(false);
  };

  return (
    <header className="bg-white shadow-soft sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">Paint</span>
            <span className="text-amber-500">&</span>
            <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Plumb</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
            
            {/* Categories Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center font-medium"
              >
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl z-50 overflow-hidden border border-slate-100">
                  <div className="p-2 grid gap-1">
                    {categories.map((category) => (
                      <Link 
                        key={category.id}
                        to={`/products/${category.id}`}
                        className="px-4 py-2 hover:bg-blue-50 rounded-md block text-gray-700 hover:text-blue-600"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
            
            {/* Search button */}
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-600">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Cart button with item count */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-blue-50 hover:text-blue-600">
                <ShoppingCart className="h-5 w-5" />
                {cart.totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center font-bold">
                    {cart.totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-4 relative">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {cart.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center font-bold">
                  {cart.totalItems}
                </span>
              )}
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="hover:bg-blue-50 rounded-full">
              {isMenuOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-blue-600 transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>Home</Link>
              
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="hover:text-blue-600 transition-colors py-2 border-b border-gray-100 text-left flex justify-between items-center"
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isCategoriesOpen && (
                <div className="pl-4 space-y-2 bg-gray-50 p-4 rounded-lg">
                  {categories.map((category) => (
                    <Link 
                      key={category.id}
                      to={`/products/${category.id}`}
                      className="block py-1 hover:text-blue-600 transition-colors"
                      onClick={toggleMenu}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
              
              <Link to="/services" className="hover:text-blue-600 transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>Services</Link>
              <Link to="/contact" className="hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
