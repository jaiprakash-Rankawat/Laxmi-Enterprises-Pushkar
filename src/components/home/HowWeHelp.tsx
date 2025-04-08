
import { Check, PaintBucket, Wrench, Truck, Headset, Users } from "lucide-react";

const HowWeHelp = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl font-bold text-navy mt-2">How We Can Help You</h2>
          <div className="section-divider"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At Laxmi Enterprises Pushkar, we offer a wide range of services to meet all your painting and plumbing needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-blue-100">
            <div className="h-2 bg-gradient-to-r from-navy to-lightblue"></div>
            <div className="p-8">
              <div className="bg-blue-50 p-4 rounded-full inline-flex mb-6 border border-blue-100">
                <PaintBucket size={32} className="text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Premium Paint Selection</h3>
              <p className="text-gray-600 mb-6">
                We offer a wide range of high-quality paints from leading brands like Asian Paints, with color matching and mixing services.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Expert color consultation</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Custom paint mixing</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Eco-friendly options</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-blue-100">
            <div className="h-2 bg-gradient-to-r from-navy to-lightblue"></div>
            <div className="p-8">
              <div className="bg-blue-50 p-4 rounded-full inline-flex mb-6 border border-blue-100">
                <Wrench size={32} className="text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Professional Plumbing Solutions</h3>
              <p className="text-gray-600 mb-6">
                From basic fixtures to complete bathroom renovations, we provide all the plumbing supplies for quality installations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Quality bathroom fittings</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Pipe and fitting solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Water-saving fixtures</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-blue-100">
            <div className="h-2 bg-gradient-to-r from-navy to-lightblue"></div>
            <div className="p-8">
              <div className="bg-blue-50 p-4 rounded-full inline-flex mb-6 border border-blue-100">
                <Headset size={32} className="text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Expert Consultation</h3>
              <p className="text-gray-600 mb-6">
                Our team provides personalized advice for your projects, helping you choose the right products for your needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Project planning assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Material estimation</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Professional recommendations</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 4 */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-blue-100">
            <div className="h-2 bg-gradient-to-r from-navy to-lightblue"></div>
            <div className="p-8">
              <div className="bg-blue-50 p-4 rounded-full inline-flex mb-6 border border-blue-100">
                <Users size={32} className="text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Professional Painter Network</h3>
              <p className="text-gray-600 mb-6">
                Connect with our network of skilled, experienced painters who deliver quality workmanship for your painting projects.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Vetted professional painters</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Quality guarantees</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Competitive rates</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 5 */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-blue-100">
            <div className="h-2 bg-gradient-to-r from-navy to-lightblue"></div>
            <div className="p-8">
              <div className="bg-blue-50 p-4 rounded-full inline-flex mb-6 border border-blue-100">
                <Wrench size={32} className="text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Reliable Plumber Network</h3>
              <p className="text-gray-600 mb-6">
                We connect you with trusted plumbing professionals for installations, repairs, and maintenance work.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Experienced plumbers</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Emergency services available</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Transparent pricing</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 6 */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-blue-100">
            <div className="h-2 bg-gradient-to-r from-navy to-lightblue"></div>
            <div className="p-8">
              <div className="bg-blue-50 p-4 rounded-full inline-flex mb-6 border border-blue-100">
                <Truck size={32} className="text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Delivery Services</h3>
              <p className="text-gray-600 mb-6">
                We deliver products right to your doorstep, making it convenient for you to get the supplies you need.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Free local delivery</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Scheduled delivery options</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <span>Bulk order transport</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeHelp;
