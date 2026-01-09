import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { AboutSection } from "@/components/organisms/AboutSection";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { ContactSection } from "@/components/organisms/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white">
      <Header />
      {/* Hero Section */}
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
