
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Homeowner",
    text: "Laxmi Enterprises has provided excellent service for all my painting needs. The quality of products and their helpful staff made my house renovation a breeze!"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Interior Designer",
    text: "I've been recommending Laxmi Enterprises to all my clients. Their wide range of products and professional advice consistently exceed expectations."
  },
  {
    id: 3,
    name: "Amir Khan",
    role: "Contractor",
    text: "As a contractor, I need reliable suppliers. Laxmi Enterprises has been my go-to store for years. Their products are top-notch and their delivery is always on time."
  },
  {
    id: 4,
    name: "Sunita Gupta",
    role: "Homeowner",
    text: "The plumbing solutions from Laxmi Enterprises fixed all our issues. Their expert advice helped us choose the right products for our old house."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const slidePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
          <p className="text-gray-300">Hear from our satisfied customers about their experiences</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div ref={containerRef} className="overflow-hidden relative">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="min-w-full px-4"
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center">
                      <div className="mb-6">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                      </div>
                      <p className="text-lg italic mb-6">{testimonial.text}</p>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mb-4 flex items-center justify-center text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-300">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-3">
              <Button
                variant="outline" 
                size="icon"
                onClick={slidePrev}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeIndex === index ? "bg-white" : "bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={slideNext}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
