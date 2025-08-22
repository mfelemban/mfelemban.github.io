import { ReactNode } from "react";
import Navigation from "./Navigation";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {title && (
          <div className="bg-gradient-subtle py-12 mb-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}
        {children}
      </main>
    </div>
  );
};

export default PageLayout;