import { useCart } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { cart, updateQuantity, removeItem, clearCart } = useCart();
  const { toast } = useToast();
  
  const handleCheckout = () => {
    // Here you would typically redirect to a checkout page or process
    toast({
      title: "Checkout initiated",
      description: "This is a demo. In a real store, you would proceed to payment.",
    });
    
    // For demo purposes, clear the cart after a short delay
    setTimeout(() => {
      clearCart();
      toast({
        title: "Order placed",
        description: "Thank you for your purchase!",
      });
    }, 2000);
  };
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy mb-6">Shopping Cart</h1>
        
        {cart.items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-gray-400 mb-4">
              <ShoppingBag className="h-16 w-16 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/products">
              <Button className="bg-navy hover:bg-lightblue">
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-navy">Items ({cart.totalItems})</h2>
                  <Button 
                    variant="ghost" 
                    className="text-gray-500 hover:text-red-600"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
                
                <div className="divide-y">
                  {cart.items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h2 className="text-xl font-bold text-navy mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{cart.totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>₹{cart.totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="mt-6 w-full bg-orange hover:bg-orange/90"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
                
                <div className="mt-4">
                  <Link to="/products" className="text-lightblue hover:underline text-sm flex justify-center">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
