
import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectStart = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-navy to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Let's transform your vision into reality. Our team of experts is ready to help with all your home improvement needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all transform hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-blue-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Call Us</h3>
            <p className="text-blue-100 mb-4">Speak directly with our experts about your project requirements.</p>
            <a href="tel:+919876543210" className="inline-flex items-center text-blue-300 hover:text-blue-200">
              +91 987-654-3210 <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all transform hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-green-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">WhatsApp Order</h3>
            <p className="text-blue-100 mb-4">Place your order directly through WhatsApp for quick service.</p>
            <Link to="/whatsapp-order" className="inline-flex items-center text-blue-300 hover:text-blue-200">
              Order via WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all transform hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-purple-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Schedule Visit</h3>
            <p className="text-blue-100 mb-4">Book a time for our experts to visit and assess your requirements.</p>
            <Link to="/contact" className="inline-flex items-center text-blue-300 hover:text-blue-200">
              Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-white text-navy hover:bg-blue-50">
            Browse Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectStart;
