
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { shopInfo } from "@/data/services";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WhatsAppOrder = () => {
  const { cart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("delivery");
  
  const generateWhatsAppMessage = () => {
    let message = `Hello, I would like to place an order:\n\n`;
    
    // Add items
    message += `*Order Items:*\n`;
    cart.items.forEach(item => {
      message += `- ${item.name} (₹${item.price}) x ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    // Add subtotal
    message += `\n*Subtotal:* ₹${cart.totalAmount.toFixed(2)}`;
    
    // Add delivery method
    message += `\n*${deliveryMethod === "delivery" ? "Delivery" : "Pickup"}*`;
    if (deliveryMethod === "delivery") {
      message += `\n*Delivery Fee:* ₹50.00`;
      message += `\n*Total:* ₹${(cart.totalAmount + 50).toFixed(2)}`;
    } else {
      message += `\n*Total:* ₹${cart.totalAmount.toFixed(2)}`;
    }
    
    // Add customer info
    message += `\n\n*Customer Information:*`;
    message += `\nName: ${name}`;
    message += `\nPhone: ${phone}`;
    if (deliveryMethod === "delivery") {
      message += `\nAddress: ${address}`;
    }
    
    return encodeURIComponent(message);
  };
  
  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${shopInfo.phone.replace(/\D/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Link to="/cart" className="inline-flex items-center text-navy hover:text-lightblue mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Cart
          </Link>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold">Order via WhatsApp</h1>
            </div>
            
            <p className="mb-6 text-gray-600">
              Complete this form to place your order through WhatsApp. You'll be redirected to WhatsApp with your order details.
            </p>
            
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              
              {cart.items.length > 0 ? (
                <div className="border rounded-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm">Item</th>
                        <th className="px-4 py-2 text-right text-sm">Qty</th>
                        <th className="px-4 py-2 text-right text-sm">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.items.map(item => (
                        <tr key={item.id} className="border-t">
                          <td className="px-4 py-3 text-sm">{item.name}</td>
                          <td className="px-4 py-3 text-right text-sm">{item.quantity}</td>
                          <td className="px-4 py-3 text-right text-sm">₹{(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-50">
                      <tr className="border-t">
                        <td colSpan={2} className="px-4 py-3 text-sm font-medium">Subtotal</td>
                        <td className="px-4 py-3 text-right text-sm font-medium">₹{cart.totalAmount.toFixed(2)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              ) : (
                <div className="text-center py-6 border rounded">
                  <p>Your cart is empty</p>
                  <Link to="/products" className="text-navy hover:underline mt-2 inline-block">
                    Add items to your cart
                  </Link>
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4">Delivery Method</h2>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="flex items-center space-x-2 p-4 border rounded-md cursor-pointer">
                    <input 
                      type="radio" 
                      name="delivery" 
                      checked={deliveryMethod === "delivery"}
                      onChange={() => setDeliveryMethod("delivery")}
                      className="text-navy focus:ring-navy" 
                    />
                    <span>Home Delivery</span>
                  </label>
                </div>
                <div className="flex-1">
                  <label className="flex items-center space-x-2 p-4 border rounded-md cursor-pointer">
                    <input 
                      type="radio" 
                      name="delivery"
                      checked={deliveryMethod === "pickup"} 
                      onChange={() => setDeliveryMethod("pickup")}
                      className="text-navy focus:ring-navy" 
                    />
                    <span>Store Pickup</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4">Your Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name*</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number*</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                    required
                  />
                </div>
                
                {deliveryMethod === "delivery" && (
                  <div>
                    <label className="block text-sm font-medium mb-1">Delivery Address*</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                      rows={3}
                      required
                    ></textarea>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center"
                onClick={handleWhatsAppOrder}
                disabled={!name || !phone || (deliveryMethod === "delivery" && !address) || cart.items.length === 0}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Continue on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppOrder;
