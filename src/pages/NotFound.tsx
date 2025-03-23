
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center py-32">
        <div className="max-w-md w-full px-6">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:shadow-lg hover:shadow-primary/20 transition-all inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
