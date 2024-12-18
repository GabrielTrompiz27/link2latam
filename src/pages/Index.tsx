import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { OurFocus } from "@/components/OurFocus";
import { About } from "@/components/About";
import { RegionalExpertise } from "@/components/RegionalExpertise";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <OurFocus />
      <About />
      <RegionalExpertise />
      <Footer />
    </div>
  );
};

export default Index;