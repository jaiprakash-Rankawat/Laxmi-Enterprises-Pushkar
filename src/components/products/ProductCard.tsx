
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 md:h-64 bg-gray-100 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-navy mb-2 line-clamp-2">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-800 font-bold">₹{product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500 capitalize">{product.category.replace("-", " ")}</span>
        </div>
        
        <Button 
          onClick={() => addItem(product)} 
          className="w-full bg-navy hover:bg-lightblue flex items-center justify-center"
        >
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
