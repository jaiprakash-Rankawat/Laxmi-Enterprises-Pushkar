
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft, CreditCard } from "lucide-react";
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
    <div className="bg-slate-50 py-12 min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Your Shopping Cart
        </h1>
        
        {cart.items.length === 0 ? (
          <div className="bg-white rounded-xl shadow-soft p-10 text-center max-w-md mx-auto">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-10 w-10 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/products">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-soft p-6">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">Items ({cart.totalItems})</h2>
                  <Button 
                    variant="ghost" 
                    className="text-gray-500 hover:text-rose-600"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {cart.items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link to="/products" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium">₹{cart.totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>₹{cart.totalAmount.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Tax included and shipping calculated at checkout</p>
                  </div>
                </div>
                
                <Button 
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 rounded-full h-12 text-white font-medium"
                  onClick={handleCheckout}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Proceed to Checkout
                </Button>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p className="mb-2">We accept</p>
                  <div className="flex justify-center space-x-2">
                    <div className="h-8 w-12 bg-gray-100 rounded-md"></div>
                    <div className="h-8 w-12 bg-gray-100 rounded-md"></div>
                    <div className="h-8 w-12 bg-gray-100 rounded-md"></div>
                    <div className="h-8 w-12 bg-gray-100 rounded-md"></div>
                  </div>
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
