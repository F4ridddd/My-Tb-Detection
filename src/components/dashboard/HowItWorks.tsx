import { Upload, Cpu, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload X-ray",
    description: "Simply drag and drop or select your chest X-ray image file to begin the analysis process.",
    step: "01"
  },
  {
    icon: Cpu,
    title: "AI Processing",
    description: "Our advanced machine learning model analyzes the X-ray image to detect potential signs of tuberculosis.",
    step: "02"
  },
  {
    icon: FileCheck,
    title: "Get Results",
    description: "Receive instant prediction results with probability scores and clear visual indicators.",
    step: "03"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Get your tuberculosis screening results in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-medical-blue flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-medical-blue transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-primary group-hover:text-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
