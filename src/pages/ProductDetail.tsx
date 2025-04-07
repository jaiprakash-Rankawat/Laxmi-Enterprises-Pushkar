import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById, getProductsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductList from "@/components/products/ProductList";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  
  const product = productId ? getProductById(productId) : undefined;
  
  const relatedProducts = product 
    ? getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4) 
    : [];
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
      toast({
        title: "Added to cart",
        description: `${quantity} × ${product.name} has been added to your cart.`,
      });
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-navy mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products">
          <Button>
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-navy">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-navy">Products</Link>
          <span className="mx-2">/</span>
          <Link to={`/products/${product.category}`} className="hover:text-navy capitalize">
            {product.category.replace('-', ' ')}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-navy mb-2">{product.name}</h1>
            
            <div className="text-2xl text-orange font-bold mb-4">
              ₹{product.price.toFixed(2)}
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  -
                </Button>
                <span className="mx-4 text-lg w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                >
                  +
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleAddToCart}
                className="bg-navy hover:bg-lightblue flex-1 flex items-center justify-center"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Link to="/cart" className="flex-1">
                <Button
                  className="bg-orange hover:bg-orange/90 w-full"
                >
                  Buy Now
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              <Link
                to={`/products/${product.category}`}
                className="inline-block bg-gray-100 px-3 py-1 rounded-full text-gray-700 hover:bg-gray-200 transition-colors capitalize"
              >
                {product.category.replace('-', ' ')}
              </Link>
            </div>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-navy">Related Products</h2>
              <Link to={`/products/${product.category}`} className="text-lightblue flex items-center hover:underline">
                View All <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <ProductList products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
