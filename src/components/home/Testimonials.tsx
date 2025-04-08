
import { useState } from "react";
import { Quote } from "lucide-react";
import ReviewStars from "../reviews/ReviewStars";
import { getWebsiteReviews } from "@/data/reviews";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = getWebsiteReviews();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-20 bg-gradient-to-r from-navy/5 to-lightblue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-wider">Happy Customers</span>
          <h2 className="text-3xl font-bold text-navy mt-2">What Our Customers Say</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-card p-10 text-center">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange text-white p-3 rounded-full">
              <Quote size={24} />
            </div>
            
            <div className="mt-4">
              <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                "{testimonials[activeIndex].review}"
              </p>
              
              <div className="flex justify-center mb-2">
                <ReviewStars rating={testimonials[activeIndex].rating} size="medium" />
              </div>
              
              <h4 className="font-semibold text-navy text-lg">{testimonials[activeIndex].userName}</h4>
              <p className="text-gray-500">{testimonials[activeIndex].date}</p>
            </div>
            
            {/* Navigation */}
            {testimonials.length > 1 && (
              <div className="flex justify-center mt-8 space-x-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="h-10 w-10 rounded-full border-navy text-navy hover:bg-navy hover:text-white"
                  onClick={prevTestimonial}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  className="h-10 w-10 rounded-full border-navy text-navy hover:bg-navy hover:text-white"
                  onClick={nextTestimonial}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Button>
              </div>
            )}
          </div>
          
          {/* Indicators */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-orange" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
