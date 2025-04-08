
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
    <div className="product-card group transition-all duration-300 bg-white rounded-lg shadow-soft hover:shadow-md overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <div className="h-52 md:h-64 bg-slate-50 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute top-3 right-3">
            <Badge className="bg-gradient-to-r from-navy to-lightblue hover:from-lightblue hover:to-teal text-white text-xs font-medium uppercase tracking-wider">
              {product.category.replace("-", " ")}
            </Badge>
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-medium text-navy mb-2 line-clamp-2 group-hover:text-lightblue transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-navy">₹{product.price.toFixed(2)}</span>
          {product.price > 100 && (
            <span className="text-sm text-rose line-through">₹{(product.price * 1.2).toFixed(2)}</span>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={() => addItem(product)} 
            className="flex-1 bg-gradient-to-r from-navy to-lightblue hover:from-lightblue hover:to-navy text-white rounded-full shadow-soft"
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </Button>
          <Link to={`/product/${product.id}`} className="inline-block">
            <Button variant="outline" size="icon" className="rounded-full border-lightblue hover:bg-lightblue/10 text-navy hover:text-lightblue">
              <Eye size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
