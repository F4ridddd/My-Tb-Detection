import FeaturesSection from "@/components/dashboard/FeaturesSection";
import HeroSection from "@/components/dashboard/HeroSection";
import HowItWorks from "@/components/dashboard/HowItWorks";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
