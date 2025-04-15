
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchOverlay from "@/components/search/SearchOverlay";
import DesktopNavigation from "./DesktopNavigation";
import MobileActions from "./MobileActions";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 shadow-soft sticky top-0 z-40 border-b-2 border-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="bg-white bg-clip-text text-transparent">
              Laxmi Enterprises Pushkar
            </span>
          </Link>

          <DesktopNavigation onSearchOpen={() => setIsSearchOpen(true)} />
          <MobileActions 
            isMenuOpen={isMenuOpen} 
            toggleMenu={toggleMenu} 
            onSearchOpen={() => setIsSearchOpen(true)} 
          />
        </div>
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
};

export default Navbar;
