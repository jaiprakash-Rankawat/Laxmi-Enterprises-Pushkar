
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span className="text-white">Paint</span>
              <span className="text-orange">&</span>
              <span className="text-lightblue">Plumb</span>
              <span className="text-white"> Emporium</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Your one-stop shop for all painting and plumbing needs. Quality products and professional services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/asian-paints" className="text-gray-300 hover:text-white transition-colors">Asian Paints</Link>
              </li>
              <li>
                <Link to="/products/bath-fittings" className="text-gray-300 hover:text-white transition-colors">Bath Fittings</Link>
              </li>
              <li>
                <Link to="/products/cpvc-pipe" className="text-gray-300 hover:text-white transition-colors">CPVC Pipe and Fittings</Link>
              </li>
              <li>
                <Link to="/products/sanitary-items" className="text-gray-300 hover:text-white transition-colors">Sanitary Items</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-lightblue shrink-0" />
                <span className="text-gray-300">123 Paint Street, Plumber's Lane, Your City</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-lightblue" />
                <span className="text-gray-300">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-lightblue" />
                <span className="text-gray-300">info@paintplumb.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Paint & Plumb Emporium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
