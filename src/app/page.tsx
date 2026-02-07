import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import WorkingProcess from "@/components/WorkingProcess/WorkingProcess";
import TeamSection from "@/components/TeamSection/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import BlogSection from "@/components/BlogSection/BlogSection";
import BrandSection from "@/components/BrandSection/BrandSection";
import AssamMap from "@/components/AssamMap/AssamMap";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <FeaturesSection />
      <WorkingProcess />
      <TeamSection />
      <TestimonialsSection />
      <ProjectDetails />
      <BlogSection />
      <BrandSection />
      <AssamMap />
    </div>
  );
}
