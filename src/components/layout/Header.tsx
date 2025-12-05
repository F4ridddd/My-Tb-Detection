import { Link, useLocation } from "react-router-dom";
import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-foreground hover:text-medical-blue-dark transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg hidden sm:block">TB Detect</span>
          </Link>

          <nav className="flex items-center gap-1">
            <Link
              to="/"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                location.pathname === "/"
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              Home
            </Link>
            <Link
              to="/upload"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                location.pathname === "/upload"
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              Upload
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
