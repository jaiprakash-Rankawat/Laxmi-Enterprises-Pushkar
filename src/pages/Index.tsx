
import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Services from "@/components/home/Services";
import HowWeHelp from "@/components/home/HowWeHelp";
import Testimonials from "@/components/home/Testimonials";
import ProjectStart from "@/components/home/ProjectStart";
import Categories from "@/components/home/Categories";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Laxmi Enterprises - Paint and Plumbing Solutions";
  }, []);

  return (
    <div>
      <Hero />
      <Categories key="categories-section" />
      <FeaturedProducts />
      <HowWeHelp />
      <Services />
      <Testimonials />
      <ProjectStart />
    </div>
  );
};

export default Index;
