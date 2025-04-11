
import { useState } from "react";
import { Quote } from "lucide-react";
import ReviewStars from "../reviews/ReviewStars";
import { getWebsiteReviews } from "@/data/reviews";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = getWebsiteReviews();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-amber to-lightblue"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-32 -top-32 w-64 h-64 rounded-full bg-orange"></div>
        <div className="absolute -right-32 -bottom-32 w-64 h-64 rounded-full bg-lightblue"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">What Our Happy Customers Say</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange to-amber mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel 
            className="w-full" 
            opts={{ loop: true }}
            onSelect={(api) => setActiveIndex(api?.selectedScrollSnap() || 0)}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-full">
                  <div className="p-2">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
                      <div className="p-8 md:p-10 relative">
                        <div className="absolute top-4 right-4">
                          <div className="text-amber">
                            <Quote size={28} />
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange to-amber flex items-center justify-center text-white font-bold text-2xl">
                            {testimonial.userName.charAt(0)}
                          </div>
                          
                          <div className="flex-1">
                            <p className="text-xl text-white/90 italic leading-relaxed mb-6">
                              "{testimonial.review}"
                            </p>
                            
                            <div className="mt-6">
                              <h4 className="font-semibold text-white text-lg">{testimonial.userName}</h4>
                              <div className="flex items-center mt-2">
                                <ReviewStars rating={testimonial.rating} size="medium" />
                                <span className="text-amber ml-2">{testimonial.rating}/5</span>
                              </div>
                              <p className="text-white/60 text-sm mt-2">{testimonial.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static bg-white/10 hover:bg-white/20 text-white border-white/20" />
              <CarouselNext className="static bg-white/10 hover:bg-white/20 text-white border-white/20" />
            </div>
          </Carousel>
          
          {/* Indicators */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 transition-all duration-300 rounded-full ${
                    index === activeIndex 
                      ? "w-8 bg-gradient-to-r from-orange to-amber" 
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-orange animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-amber animate-pulse delay-100"></div>
            <div className="w-3 h-3 rounded-full bg-lightblue animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
