import { Activity, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Activity className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-medium">TB Detect</span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-destructive fill-destructive" /> for healthcare
          </p>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50">
          <p className="text-xs text-center text-muted-foreground max-w-2xl mx-auto">
            Disclaimer: This tool is for educational and screening purposes only. 
            Always consult a qualified healthcare professional for medical diagnosis and treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
