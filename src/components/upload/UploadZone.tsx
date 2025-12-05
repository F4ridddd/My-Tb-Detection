import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, Image, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const UploadZone = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const handleFile = useCallback((selectedFile: File) => {
    if (!selectedFile.type.startsWith('image/')) {
      toast('Invalid File Type');
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      toast('File to large');
      return;
    }

    setFile(selectedFile);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(selectedFile);
  }, [toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  }, [handleFile]);

  const clearFile = useCallback(() => {
    setFile(null);
    setPreview(null);
  }, []);

  const handleAnalyze = useCallback(() => {
    if (!file || !preview) return;

    setIsAnalyzing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsAnalyzing(false);
      // Navigate to results with mock data
      navigate('/result', { 
        state: { 
          imageUrl: preview,
          prediction: Math.random() > 0.5 ? 'positive' : 'negative',
          confidence: Math.floor(Math.random() * 15) + 85
        }
      });
    }, 2000);
  }, [file, preview, navigate]);

  return (
    <div className="max-w-2xl mx-auto">
      {!preview ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={cn(
            "relative border-2 border-dashed rounded-2xl p-12 transition-all duration-300 cursor-pointer",
            isDragging 
              ? "border-medical-blue-dark bg-medical-blue/50 scale-[1.02]" 
              : "border-border bg-card hover:border-medical-blue-dark hover:bg-medical-blue/20"
          )}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleInputChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-2xl bg-secondary mx-auto flex items-center justify-center mb-6">
              <Upload className={cn(
                "w-10 h-10 transition-colors duration-300",
                isDragging ? "text-medical-blue-dark" : "text-muted-foreground"
              )} />
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {isDragging ? "Drop your X-ray here" : "Upload Chest X-ray"}
            </h3>
            <p className="text-muted-foreground mb-4">
              Drag and drop your image or click to browse
            </p>
            <p className="text-sm text-muted-foreground">
              Supported formats: JPG, PNG, DICOM • Max size: 10MB
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden animate-scale-in">
          {/* Image preview */}
          <div className="relative aspect-square max-h-[400px] bg-muted flex items-center justify-center">
            <img 
              src={preview} 
              alt="X-ray preview" 
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Clear button */}
            <button
              onClick={clearFile}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* File info and actions */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-medical-blue flex items-center justify-center">
                <Image className="w-6 h-6 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">{file?.name}</p>
                <p className="text-sm text-muted-foreground">
                  {file && (file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>

            <Button 
              onClick={handleAnalyze} 
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Image"
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadZone;
