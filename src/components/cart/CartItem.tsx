
import { CartItem as CartItemType } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 py-4">
      <div className="flex items-center flex-1">
        <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden mr-4">
          <Link to={`/product/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
        
        <div className="flex-1">
          <Link to={`/product/${item.id}`}>
            <h3 className="text-navy font-medium line-clamp-2">{item.name}</h3>
          </Link>
          <p className="text-sm text-gray-500 capitalize">{item.category.replace('-', ' ')}</p>
          <p className="text-orange font-bold mt-1">₹{item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center mt-4 sm:mt-0">
        <div className="flex items-center border rounded overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="flex-1 px-3 text-center">{item.quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="ml-2 text-gray-500 hover:text-red-600"
          onClick={() => onRemove(item.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
