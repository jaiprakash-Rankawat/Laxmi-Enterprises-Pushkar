
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ReviewStars from "../reviews/ReviewStars";
import { getWebsiteReviews } from "@/data/reviews";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = getWebsiteReviews();

  return (
    <div className="py-20 bg-gradient-to-r from-navy/5 to-lightblue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-wider">Happy Customers</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">What Our Customers Say</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-full">
                  <div className="p-1">
                    <Card className="border-0 shadow-lg rounded-2xl bg-white overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-12">
                          {/* Decorative sidebar */}
                          <div className="hidden md:block md:col-span-1 bg-gradient-to-b from-navy to-lightblue"></div>
                          
                          {/* Testimonial content */}
                          <div className="col-span-11 p-8 md:p-10 relative">
                            <div className="absolute -top-6 left-8 bg-orange text-white p-3 rounded-full shadow-md">
                              <Quote size={24} />
                            </div>
                            
                            <div className="mt-8">
                              <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                                "{testimonial.review}"
                              </p>
                              
                              <div className="flex justify-between items-center mt-10">
                                <div>
                                  <h4 className="font-semibold text-navy text-lg">{testimonial.userName}</h4>
                                  <p className="text-gray-500">{testimonial.date}</p>
                                </div>
                                <div className="flex flex-col items-end">
                                  <ReviewStars rating={testimonial.rating} size="medium" />
                                  <span className="text-sm text-gray-500 mt-1">{testimonial.rating}/5</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mr-2 bg-navy text-white hover:bg-lightblue hover:text-white" />
              <CarouselNext className="relative static ml-2 bg-navy text-white hover:bg-lightblue hover:text-white" />
            </div>
          </Carousel>
          
          {/* Indicators */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === 0 ? "bg-orange" : "bg-gray-300"
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
