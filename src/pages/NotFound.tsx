import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl lg:text-8xl font-extrabold text-primary">
          404
        </h1>
        <p className="text-xl lg:text-2xl text-muted-foreground">Oops! Page not found</p>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 btn-hero"
        >
          <Home size={20} aria-hidden="true" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
