import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-medical-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-medical-blue rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-medical-blue-dark" />
            <span className="text-sm font-medium text-muted-foreground">AI-Powered Medical Screening</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Tuberculosis Detection
            <span className="block text-medical-blue-dark mt-2">System</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Upload your chest X-ray and get instant prediction using advanced artificial intelligence technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button asChild variant="hero" size="xl">
              <Link to="/upload" className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload X-ray
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <a href="#how-it-works">
                Learn More
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-bold text-foreground">
                <Zap className="w-5 h-5 text-medical-blue-dark" />
                <span>Fast</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Results in seconds</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">95%+</div>
              <p className="text-sm text-muted-foreground mt-1">Accuracy rate</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">Free</div>
              <p className="text-sm text-muted-foreground mt-1">To use</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
