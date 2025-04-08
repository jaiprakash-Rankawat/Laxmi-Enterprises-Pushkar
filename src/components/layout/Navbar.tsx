import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import SearchOverlay from "@/components/search/SearchOverlay";

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
    <header className="bg-white shadow-soft sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="bg-gradient-to-r from-navy via-lightblue to-teal bg-clip-text text-transparent">Paint</span>
            <span className="text-orange">&</span>
            <span className="bg-gradient-to-r from-teal via-emerald to-lightblue bg-clip-text text-transparent">Plumb</span>
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-navy hover:text-lightblue transition-colors font-medium">Home</Link>
            
            <div className="relative">
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="text-navy hover:text-lightblue transition-colors flex items-center font-medium"
              >
                Products
                <svg className={`w-4 h-4 ml-1 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-card z-50 overflow-hidden border border-slate-100 animate-fade-in">
                  <div className="p-2 grid gap-1">
                    {categories.map((category) => (
                      <Link 
                        key={category.id}
                        to={`/products/${category.id}`}
                        className="px-4 py-2 hover:bg-blue-50 rounded-md block text-navy hover:text-lightblue"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/services" className="text-navy hover:text-lightblue transition-colors font-medium">Services</Link>
            <Link to="/contact" className="text-navy hover:text-lightblue transition-colors font-medium">Contact</Link>
            <Link to="/admin/login" className="text-navy hover:text-lightblue transition-colors font-medium">Admin</Link>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-blue-50 hover:text-lightblue text-navy"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-blue-50 hover:text-lightblue text-navy">
                <ShoppingCart className="h-5 w-5" />
                {cart.totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange text-white text-xs h-5 w-5 rounded-full flex items-center justify-center font-bold shadow-soft">
                    {cart.totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost" 
              size="icon" 
              className="hover:bg-blue-50 mr-2 rounded-full text-navy"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart" className="mr-4 relative">
              <ShoppingCart className="h-5 w-5 text-navy" />
              {cart.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange text-white text-xs h-5 w-5 rounded-full flex items-center justify-center font-bold shadow-soft">
                  {cart.totalItems}
                </span>
              )}
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="hover:bg-blue-50 rounded-full text-navy">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-lightblue text-navy transition-colors py-3 border-b border-gray-100" onClick={toggleMenu}>Home</Link>
              
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="hover:text-lightblue text-navy transition-colors py-3 border-b border-gray-100 text-left flex justify-between items-center"
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isCategoriesOpen && (
                <div className="pl-4 space-y-2 bg-blue-50 p-4 rounded-lg animate-zoom-in">
                  {categories.map((category) => (
                    <Link 
                      key={category.id}
                      to={`/products/${category.id}`}
                      className="block py-2 hover:text-lightblue text-navy transition-colors"
                      onClick={toggleMenu}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
              
              <Link to="/services" className="hover:text-lightblue text-navy transition-colors py-3 border-b border-gray-100" onClick={toggleMenu}>Services</Link>
              <Link to="/contact" className="hover:text-lightblue text-navy transition-colors py-3 border-b border-gray-100" onClick={toggleMenu}>Contact</Link>
              <Link to="/admin/login" className="hover:text-lightblue text-navy transition-colors py-3" onClick={toggleMenu}>Admin</Link>
            </nav>
          </div>
        </div>
      )}

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Navbar;
