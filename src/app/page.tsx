import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import GradientBlobs from "@/components/GradientBlobs";
import HeroSection from "@/components/sections/HeroSection";

import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";
import MethodologySection from "@/components/sections/MethodologySection";
import CRMSection from "@/components/sections/CRMSection";
import MetricsSection from "@/components/sections/MetricsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SocialMediaSection from "@/components/sections/SocialMediaSection";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQSection from "@/components/sections/FAQSection";
import VideoShowcase from "@/components/sections/VideoShowcase";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll>
        <GradientBlobs />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />

          <ServicesSection />
          <WorkSection />
          <SocialMediaSection />
          <AboutSection />
          <MethodologySection />
          <CRMSection />
          <MetricsSection />
          <TestimonialsSection />
          <BlogPreview />
          <FAQSection />
          <VideoShowcase />
          <ContactSection />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
