
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface MobileActionsProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  onSearchOpen: () => void;
}

const MobileActions = ({ isMenuOpen, toggleMenu, onSearchOpen }: MobileActionsProps) => {
  const { cart } = useCart();

  return (
    <div className="md:hidden flex items-center">
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-blue-50 mr-2 rounded-full text-white"
        onClick={onSearchOpen}
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
  );
};

export default MobileActions;
