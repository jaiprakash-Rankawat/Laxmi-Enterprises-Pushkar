
import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import CategoriesDropdown from "./CategoriesDropdown";
import UserMenu from "./UserMenu";

interface DesktopNavigationProps {
  onSearchOpen: () => void;
}

const DesktopNavigation = ({ onSearchOpen }: DesktopNavigationProps) => {
  const { cart } = useCart();

  return (
    <nav className="hidden md:flex space-x-8 items-center">
      <Link
        to="/"
        className="text-white hover:underline hover:underline-offset-4 decoration-yellow-400 transition-colors font-medium"
      >
        Home
      </Link>

      <CategoriesDropdown />

      <Link
        to="/services"
        className="text-white hover:text-white transition-colors font-medium"
      >
        Services
      </Link>
      <Link
        to="/contact"
        className="text-white hover:text-white transition-colors font-medium"
      >
        Contact
      </Link>

      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-blue-50 hover:text-white text-white"
        onClick={onSearchOpen}
      >
        <Search className="h-5 w-5" />
      </Button>

      <Link to="/cart">
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full hover:bg-blue-50 hover:text-white text-white"
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
  );
};

export default DesktopNavigation;
