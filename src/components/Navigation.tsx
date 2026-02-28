import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/research", label: "SPQ Group" },
  { path: "/publications", label: "Publications" },
  { path: "/courses", label: "Courses" },
  { path: "/students", label: "Students" },
  { path: "/services", label: "Services" },
];

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-primary">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between h-14">
          <Link
            to="/"
            className="font-serif font-bold text-primary text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            Muhamad Felemban
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  isActive(item.path)
                    ? "text-primary font-semibold border-b-2 border-primary pb-0.5"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <nav className="md:hidden border-t border-border pb-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={cn(
                  "block py-2.5 text-sm transition-colors hover:text-primary",
                  isActive(item.path)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
