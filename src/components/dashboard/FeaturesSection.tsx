import { Shield, Clock, Lock, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "High Accuracy",
    description: "Our AI model is trained on thousands of chest X-rays for reliable detection."
  },
  {
    icon: Clock,
    title: "Instant Results",
    description: "Get your screening results within seconds, not days."
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your medical images are processed securely and never stored."
  },
  {
    icon: Globe,
    title: "Accessible",
    description: "Free to use, available anywhere with an internet connection."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Our System
          </h2>
          <p className="text-muted-foreground text-lg">
            Built with healthcare professionals and patients in mind
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card rounded-xl p-6 border border-border shadow-soft hover:shadow-soft-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-medical-blue flex items-center justify-center mb-4 group-hover:bg-medical-blue-dark transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
