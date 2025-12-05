import { useLocation, Navigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ResultCard from "@/components/result/ResultCard";
import { Activity } from "lucide-react";

interface ResultState {
  imageUrl: string;
  prediction: 'positive' | 'negative';
  confidence: number;
}

const Result = () => {
  const location = useLocation();
  const state = location.state as ResultState | null;

  // Redirect if no state (direct access without upload)
  if (!state) {
    return <Navigate to="/upload" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-blue border border-border mb-6">
                <Activity className="w-4 h-4 text-medical-blue-dark" />
                <span className="text-sm font-medium text-foreground">Analysis Complete</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Your Results
              </h1>
              <p className="text-muted-foreground text-lg">
                AI-powered tuberculosis screening analysis of your chest X-ray
              </p>
            </div>

            {/* Result card */}
            <ResultCard 
              imageUrl={state.imageUrl}
              prediction={state.prediction}
              confidence={state.confidence}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Result;
