import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerMarquee from "@/components/PartnerMarquee";
import RollingServices from "@/components/RollingServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import ContactStatic from "@/components/ContactStatic";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-neutral-900 antialiased">
      <Navbar />
      <Hero />
      <PartnerMarquee />
      <RollingServices />
      <WhyChooseUs />
      <StatsSection />
      <ContactStatic />
      <Footer />
    </main>
  );
}