import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 — Page not found:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="py-20 text-center">
        <p className="font-serif text-6xl font-bold text-primary mb-4">404</p>
        <p className="text-xl font-serif text-foreground mb-2">Page Not Found</p>
        <p className="text-sm text-muted-foreground mb-8">
          The page <code className="font-mono bg-muted px-1">{location.pathname}</code> does not exist.
        </p>
        <Link to="/" className="text-primary hover:underline text-sm">
          ← Return to Home
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFound;
