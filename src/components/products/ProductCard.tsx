
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="product-card group hover:border-blue-200 transition-all duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <div className="h-48 md:h-64 bg-slate-50 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-3 right-3">
            <Badge className="bg-blue-500 hover:bg-blue-600 text-xs font-medium uppercase tracking-wider">
              {product.category.replace("-", " ")}
            </Badge>
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-gray-800">₹{product.price.toFixed(2)}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={() => addItem(product)} 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </Button>
          <Link to={`/product/${product.id}`} className="inline-block">
            <Button variant="outline" size="icon" className="rounded-full border-blue-200 hover:bg-blue-50">
              <Eye size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
