import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ResultCardProps {
  imageUrl: string;
  prediction: 'positive' | 'negative';
  confidence: number;
}

const ResultCard = ({ imageUrl, prediction, confidence }: ResultCardProps) => {
  const isPositive = prediction === 'positive';

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-card rounded-2xl border border-border shadow-soft-lg overflow-hidden animate-scale-in">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image section */}
          <div className="relative bg-muted p-6 flex items-center justify-center">
            <div className="relative rounded-xl overflow-hidden border border-border shadow-soft">
              <img 
                src={imageUrl} 
                alt="Analyzed X-ray" 
                className="max-w-full max-h-[300px] object-contain"
              />
            </div>
          </div>

          {/* Result section */}
          <div className="p-8 flex flex-col justify-center">
            <div className="mb-6">
              <p className="text-sm font-medium text-muted-foreground mb-2">AI Analysis Result</p>
              
              <div className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold",
                isPositive 
                  ? "bg-destructive/10 text-destructive" 
                  : "bg-success/10 text-success"
              )}>
                {isPositive ? (
                  <AlertTriangle className="w-4 h-4" />
                ) : (
                  <CheckCircle2 className="w-4 h-4" />
                )}
                {isPositive ? "Tuberculosis Detected" : "Normal - No TB Detected"}
              </div>
            </div>

            {/* Confidence meter */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Confidence Level</span>
                <span className="text-lg font-bold text-foreground">{confidence}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full rounded-full transition-all duration-1000 ease-out",
                    isPositive ? "bg-destructive" : "bg-success"
                  )}
                  style={{ width: `${confidence}%` }}
                />
              </div>
            </div>

            {/* Action info */}
            <div className={cn(
              "p-4 rounded-xl mb-6",
              isPositive ? "bg-destructive/5 border border-destructive/20" : "bg-success/5 border border-success/20"
            )}>
              <div className="flex items-start gap-3">
                <FileText className={cn(
                  "w-5 h-5 mt-0.5",
                  isPositive ? "text-destructive" : "text-success"
                )} />
                <div>
                  <p className={cn(
                    "text-sm font-medium mb-1",
                    isPositive ? "text-destructive" : "text-success"
                  )}>
                    {isPositive ? "Recommendation" : "Good News"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isPositive 
                      ? "Please consult a healthcare professional for proper diagnosis and treatment options."
                      : "Your X-ray appears normal. Continue regular health check-ups as recommended."
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <Button asChild variant="hero" size="lg">
              <Link to="/upload" className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Another Image
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border">
        <p className="text-xs text-center text-muted-foreground">
          <strong>Important:</strong> This AI-powered screening tool is designed to assist, not replace, professional medical diagnosis. 
          Results should be reviewed by qualified healthcare providers for accurate assessment and treatment planning.
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
