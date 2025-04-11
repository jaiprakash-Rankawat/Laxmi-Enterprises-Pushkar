
import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Services from "@/components/home/Services";
import HowWeHelp from "@/components/home/HowWeHelp";
import Testimonials from "@/components/home/Testimonials";
import ProjectStart from "@/components/home/ProjectStart";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Set page title
    document.title = "Laxmi Enterprises - Paint and Plumbing Solutions";
  }, []);

  return (
    <div>
      <Hero />
      <HowWeHelp />
      <FeaturedProducts />
      <Services />
      <Testimonials />
      <ProjectStart />
    </div>
  );
};

export default Index;
