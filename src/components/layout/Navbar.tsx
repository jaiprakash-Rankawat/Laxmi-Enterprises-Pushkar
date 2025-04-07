
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
    <header className="bg-navy text-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold flex items-center">
            <span className="text-white">Paint</span>
            <span className="text-orange">&</span>
            <span className="text-lightblue">Plumb</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-lightblue transition-colors">Home</Link>
            
            {/* Categories Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="hover:text-lightblue transition-colors flex items-center"
              >
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white text-navy rounded-md shadow-lg z-50">
                  <div className="p-2 grid gap-1">
                    {categories.map((category) => (
                      <Link 
                        key={category.id}
                        to={`/products/${category.id}`}
                        className="px-4 py-2 hover:bg-gray-100 rounded-md block"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/services" className="hover:text-lightblue transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-lightblue transition-colors">Contact</Link>
            
            {/* Search button */}
            <Button variant="ghost" size="icon" className="hover:bg-navy">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Cart button with item count */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative hover:bg-navy">
                <ShoppingCart className="h-5 w-5" />
                {cart.totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                    {cart.totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-4 relative">
              <ShoppingCart className="h-5 w-5" />
              {cart.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  {cart.totalItems}
                </span>
              )}
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="hover:bg-navy">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-lightblue transition-colors py-2 border-b border-gray-700" onClick={toggleMenu}>Home</Link>
              
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="hover:text-lightblue transition-colors py-2 border-b border-gray-700 text-left flex justify-between items-center"
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isCategoriesOpen && (
                <div className="pl-4 space-y-2">
                  {categories.map((category) => (
                    <Link 
                      key={category.id}
                      to={`/products/${category.id}`}
                      className="block py-1 hover:text-lightblue transition-colors"
                      onClick={toggleMenu}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
              
              <Link to="/services" className="hover:text-lightblue transition-colors py-2 border-b border-gray-700" onClick={toggleMenu}>Services</Link>
              <Link to="/contact" className="hover:text-lightblue transition-colors py-2" onClick={toggleMenu}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
