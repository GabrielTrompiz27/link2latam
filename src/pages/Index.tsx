import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { RegionalExpertise } from "../components/RegionalExpertise";
import { Footer } from "../components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <RegionalExpertise />
        <Footer />
      </main>
    </>
  );
};

export default Index;