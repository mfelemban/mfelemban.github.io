import { ReactNode } from "react";
import Navigation from "./Navigation";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 container mx-auto px-6 py-10 max-w-5xl">
        {title && (
          <div className="mb-10">
            <h1 className="text-3xl font-serif font-bold text-primary border-b-2 border-primary pb-3">
              {title}
            </h1>
            {subtitle && (
              <p className="text-muted-foreground mt-3 text-sm max-w-3xl">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </main>

      <footer className="border-t-2 border-primary mt-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-5xl py-8">
          <div className="flex flex-col md:flex-row justify-between gap-6 text-sm">
            <div>
              <p className="font-serif font-semibold text-base mb-1">Dr. Muhamad Felemban</p>
              <p className="opacity-80">Computer Engineering Department</p>
              <p className="opacity-80">Information &amp; Computer Science Department</p>
              <p className="opacity-80">King Fahd University of Petroleum &amp; Minerals (KFUPM)</p>
              <p className="opacity-80">Dhahran 31261, Saudi Arabia</p>
            </div>
            <div className="md:text-right space-y-1 opacity-80">
              <p>
                <a
                  href="mailto:felemban@kfupm.edu.sa"
                  className="hover:opacity-100 underline transition-opacity"
                >
                  felemban@kfupm.edu.sa
                </a>
              </p>
              <p>
                <a
                  href="https://scholar.google.com/citations?user=ZyC2dJ8AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 underline transition-opacity"
                >
                  Google Scholar
                </a>
                {" · "}
                <a
                  href="https://dblp.org/pid/135/7413.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 underline transition-opacity"
                >
                  DBLP
                </a>
                {" · "}
                <a
                  href="https://pure.kfupm.edu.sa/en/persons/mohammad-felemban"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 underline transition-opacity"
                >
                  PURE
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
