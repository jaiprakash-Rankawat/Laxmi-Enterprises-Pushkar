
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CartItem from "@/components/cart/CartItem";
import { ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DeliveryOptions, { DeliveryMethod } from "@/components/cart/DeliveryOptions";

const Cart = () => {
  const { cart, updateQuantity, removeItem, clearCart } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("delivery");
  const { toast } = useToast();

  const handleCheckout = () => {
    // In a real app, this would redirect to a payment gateway
    toast({
      title: "Order placed successfully",
      description: `Your order has been placed for ${deliveryMethod === "delivery" ? "home delivery" : "store pickup"}`,
    });
    clearCart();
  };

  if (cart.items.length === 0) {
    return (
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ShoppingBag className="h-16 w-16 text-navy mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-navy mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products">
              <Button className="bg-navy hover:bg-lightblue">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy mb-10">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              {cart.items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </div>
            
            <div className="flex justify-between">
              <Link to="/products">
                <Button variant="outline" className="text-navy border-navy hover:bg-navy hover:text-white">
                  Continue Shopping
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
              >
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-navy mb-4">Order Summary</h2>

              <DeliveryOptions 
                selectedMethod={deliveryMethod}
                onMethodChange={setDeliveryMethod}
              />

              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{cart.totalAmount.toFixed(2)}</span>
                </div>
                
                {deliveryMethod === "delivery" && (
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">₹50.00</span>
                  </div>
                )}

                <div className="flex justify-between text-lg font-bold mt-4">
                  <span>Total</span>
                  <span>₹{(cart.totalAmount + (deliveryMethod === "delivery" ? 50 : 0)).toFixed(2)}</span>
                </div>
              </div>

              <Button 
                className="w-full bg-navy hover:bg-lightblue"
                onClick={handleCheckout}
              >
                Checkout
              </Button>

              <div className="mt-6">
                <h3 className="text-sm font-medium mb-2">Need Help?</h3>
                <div className="text-sm text-gray-600 mb-2">
                  <Link to="/whatsapp-order" className="text-navy hover:underline inline-flex items-center">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Order via WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
