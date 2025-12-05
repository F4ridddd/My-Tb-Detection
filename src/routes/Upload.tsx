import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield } from "lucide-react";
import UploadZone from "@/components/upload/UploadZone";

const Upload = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-blue border border-border mb-6">
                <Shield className="w-4 h-4 text-medical-blue-dark" />
                <span className="text-sm font-medium text-foreground">Secure Upload</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Upload Your X-ray
              </h1>
              <p className="text-muted-foreground text-lg">
                Select or drag your chest X-ray image for instant AI-powered tuberculosis screening
              </p>
            </div>

            {/* Upload zone */}
            <UploadZone />

            {/* Tips */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h3 className="text-sm font-semibold text-foreground mb-4 text-center">
                For best results:
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  "Use a clear, frontal chest X-ray image",
                  "Ensure the entire lung area is visible",
                  "Higher resolution images provide better accuracy"
                ].map((tip, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2 p-3 rounded-lg bg-muted/50"
                  >
                    <span className="w-5 h-5 rounded-full bg-medical-blue flex items-center justify-center flex-shrink-0 text-xs font-semibold text-foreground">
                      {index + 1}
                    </span>
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;
