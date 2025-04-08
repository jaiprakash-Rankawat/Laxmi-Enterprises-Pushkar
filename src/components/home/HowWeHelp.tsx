
import { Check, Paint, Wrench, Truck, HeadsetMic, PaintBucket } from "lucide-react";

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {/* Service 1 */}
          <div className="flex flex-col items-center text-center px-4 group">
            <div className="bg-blue-50 p-5 rounded-full mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
              <Paint size={32} className="text-navy group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">Premium Paint Selection</h3>
            <p className="text-gray-600">
              We offer a wide range of high-quality paints from leading brands like Asian Paints, with color matching and mixing services to meet your exact requirements.
            </p>
            <ul className="mt-4 space-y-2 text-left">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Expert color consultation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Custom paint mixing</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Eco-friendly options</span>
              </li>
            </ul>
          </div>
          
          {/* Service 2 */}
          <div className="flex flex-col items-center text-center px-4 group">
            <div className="bg-blue-50 p-5 rounded-full mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
              <Wrench size={32} className="text-navy group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">Professional Plumbing Solutions</h3>
            <p className="text-gray-600">
              From basic fixtures to complete bathroom renovations, we provide all the plumbing supplies and connections to professional plumbers to ensure quality installations.
            </p>
            <ul className="mt-4 space-y-2 text-left">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Quality bathroom fittings</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Pipe and fitting solutions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Water-saving fixtures</span>
              </li>
            </ul>
          </div>
          
          {/* Service 3 */}
          <div className="flex flex-col items-center text-center px-4 group">
            <div className="bg-blue-50 p-5 rounded-full mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
              <HeadsetMic size={32} className="text-navy group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">Expert Consultation</h3>
            <p className="text-gray-600">
              Our team provides personalized advice for your projects, helping you choose the right products and connecting you with skilled professionals.
            </p>
            <ul className="mt-4 space-y-2 text-left">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Project planning assistance</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Material estimation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Professional recommendations</span>
              </li>
            </ul>
          </div>
          
          {/* Service 4 */}
          <div className="flex flex-col items-center text-center px-4 group">
            <div className="bg-blue-50 p-5 rounded-full mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
              <PaintBucket size={32} className="text-navy group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">Professional Painter Network</h3>
            <p className="text-gray-600">
              Connect with our network of skilled, experienced painters who deliver quality workmanship for interior and exterior painting projects.
            </p>
            <ul className="mt-4 space-y-2 text-left">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Vetted professional painters</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Quality guarantees</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Competitive rates</span>
              </li>
            </ul>
          </div>
          
          {/* Service 5 */}
          <div className="flex flex-col items-center text-center px-4 group">
            <div className="bg-blue-50 p-5 rounded-full mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
              <Wrench size={32} className="text-navy group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">Reliable Plumber Network</h3>
            <p className="text-gray-600">
              We connect you with trusted plumbing professionals for installations, repairs, and maintenance work, ensuring your plumbing projects are completed to the highest standards.
            </p>
            <ul className="mt-4 space-y-2 text-left">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Experienced plumbers</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Emergency services available</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Transparent pricing</span>
              </li>
            </ul>
          </div>
          
          {/* Service 6 */}
          <div className="flex flex-col items-center text-center px-4 group">
            <div className="bg-blue-50 p-5 rounded-full mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
              <Truck size={32} className="text-navy group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">Delivery Services</h3>
            <p className="text-gray-600">
              We deliver products right to your doorstep, making it convenient for you to get the supplies you need without the hassle.
            </p>
            <ul className="mt-4 space-y-2 text-left">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Free local delivery</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Scheduled delivery options</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                <span>Bulk order transport</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeHelp;
