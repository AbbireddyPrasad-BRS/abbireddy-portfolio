import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, User, Briefcase, Mail } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Skills", href: "#skills", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-lg border-b border-border shadow-cyber"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="text-2xl font-cyber bg-gradient-cyber hover:text-cyber-cyan transition-colors duration-300 bg-clip-text text-transparent duration-300 font-extrabold hover:scale-105"
          >
            Abbireddy
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-cyber-cyan transition-colors duration-300 group hover:scale-110"
                >
                  <IconComponent className="h-4 w-4 group-hover:animate-pulse" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
            <Button
              onClick={() =>
                window.open(
                  "src\assets\6167_4Y_Resume.pdf",
                  "_blank"
                )
              }
              className="bg-gradient-cyber hover:shadow-glow-blue transition-all duration-300 transform hover:scale-105"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-cyber-cyan transition-colors hover:scale-110 duration-300 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation (Floating top-right) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-15 right-2 bg-background/60 backdrop-blur-lg border border-border shadow-cyber rounded-xl w-40 p-4 animate-fade-in">
            <div className="space-y-3">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-3 w-full text-left text-muted-foreground hover:text-cyber-cyan transition-colors duration-300 py-2"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
              <Button
                onClick={() => {
                  window.open(
                    "src\assets\6167_4Y_Resume.pdf",
                    "_blank"
                  );
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-cyber hover:shadow-glow-blue transition-all duration-300 mt-2"
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
