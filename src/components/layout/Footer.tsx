
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Paint</span>
              <span className="text-amber-400">&</span>
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Plumb</span>
              <span className="text-white"> Emporium</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your one-stop shop for all painting and plumbing needs. Quality products and professional services for every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-blue-400" /> Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-blue-400" /> Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-blue-400" /> Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-blue-400" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Top Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/asian-paints" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-blue-400" /> Asian Paints
                </Link>
              </li>
              <li>
                <Link to="/products/bath-fittings" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-blue-400" /> Bath Fittings
                </Link>
              </li>
              <li>
                <Link to="/products/cpvc-pipe" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-blue-400" /> CPVC Pipe & Fittings
                </Link>
              </li>
              <li>
                <Link to="/products/sanitary-items" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-blue-400" /> Sanitary Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Paint Street, Plumber's Lane, Your City</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@paintplumb.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Paint & Plumb Emporium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
