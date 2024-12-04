import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { RegionalExpertise } from "../components/RegionalExpertise";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <RegionalExpertise />
      <Footer />
    </div>
  );
};

export default Index;