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
      <main className="container mx-auto px-6 py-16 max-w-6xl">
        {title && (
          <div className="bg-gradient-to-b from-muted/30 to-transparent py-16 mb-12 border-b border-border">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4 tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-crimson">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}
        <div className="relative">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageLayout;