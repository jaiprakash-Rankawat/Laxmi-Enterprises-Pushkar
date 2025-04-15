
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle 
} from "lucide-react";
import { shopInfo } from "@/data/services";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubject("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help! Reach out to us using any of the methods below.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden lg:col-span-1">
              <div className="bg-gradient-to-r from-navy to-lightblue p-6 text-white">
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p>
                  We'd love to hear from you. Feel free to reach out anytime for queries, support, or feedback.
                </p>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Our Location</h3>
                    <p className="text-gray-600 mt-1">{shopInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Phone Number</h3>
                    <p className="text-gray-600 mt-1">{shopInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Email Address</h3>
                    <p className="text-gray-600 mt-1">{shopInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Business Hours</h3>
                    <p className="text-gray-600 mt-1">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8 lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="Your phone number (optional)"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject*
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message*
                  </label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    placeholder="Please describe your query in detail..."
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto bg-navy hover:bg-lightblue transition-colors flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Processing <span className="ml-2 animate-spin">⚪</span></>
                    ) : (
                      <>Send Message <Send className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
            <h2 className="text-2xl font-bold text-navy p-6">Our Location</h2>
            <div className="h-96 bg-gray-200">
              {/* Replace with actual Google Map iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.0586871196693!2d74.5227625!3d26.498695300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418e11ded55a31%3A0x93c8d5a66eb1e0ec!2sLaxmi%20Enterprises!5e0!3m2!1sen!2sin!4v1713104943782!5m2!1sen!2sin" 
                className="w-full h-full border-0" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden p-8">
            <h2 className="text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-navy flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange mr-2" />
                  What are your store hours?
                </h3>
                <p className="mt-2 text-gray-600 pl-7">
                  Our store is open Monday through Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-navy flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange mr-2" />
                  Do you offer delivery services?
                </h3>
                <p className="mt-2 text-gray-600 pl-7">
                  Yes, we offer delivery services for orders above ₹1000 within Pushkar. For other areas, delivery charges may apply.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-navy flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange mr-2" />
                  How can I track my order?
                </h3>
                <p className="mt-2 text-gray-600 pl-7">
                  Once your order is placed, you will receive an order confirmation with tracking details via SMS and email.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-navy flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange mr-2" />
                  What is your return policy?
                </h3>
                <p className="mt-2 text-gray-600 pl-7">
                  We accept returns within 7 days of purchase for unused products in their original packaging. Please contact us for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
