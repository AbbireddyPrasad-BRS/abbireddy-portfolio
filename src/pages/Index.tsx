import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Abbireddy V V S S Prasad. Built with passion and cyberpunk vibes!!⚡
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
