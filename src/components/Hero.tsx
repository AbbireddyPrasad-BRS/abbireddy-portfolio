import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // ✅ Add Framer Motion
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  Twitter,
} from "lucide-react";
import redbike from "@/assets/redbike wallpapers.png";

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText =
    "Aspiring Software Developer | AI & ML Enthusiast | Passionate Video Editor";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="py-20 relative min-h-screen flex items-end justify-center bg-gradient-dark overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 255, 247, 0.03), rgba(0, 0, 0, 0.92)), url(${redbike})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-1 bg-cyber-cyan rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1}s`,
              animationDuration: `${3 + Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-cyber font-black text-foreground mb-4 leading-tight"
        >
          <span className="bg-gradient-cyber bg-clip-text text-transparent hover:animate-glow-pulse duration-300 font-semibold">
            A. V. V. S. S. PRASAD
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-background font-code h-12 sm:h-14 md:h-16 flex items-center justify-center"
        >
          <span className="border-r-2 border-cyber-cyan animate-blink pr-1">
            {typewriterText}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-background max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2"
        >
          Building ideas that inspire & impact | B.Tech AI & ML @Aditya
          Engineering College | Exploring advanced LLM applications & full-stack
          AI integrations
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 sm:mb-12"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-cyber hover:shadow-glow-cyan transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg font-semibold transform hover:scale-105"
          >
            View My Work
          </Button>

          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-background transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg font-semibold transform hover:shadow-glow-blue hover:scale-105"
          >
            <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="flex justify-center space-x-4 sm:space-x-6 mb-12 sm:mb-16"
        >
          <a
            href="https://github.com/AbbireddyPrasad-BRS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-cyber-cyan transition-colors duration-300 transform hover:scale-110"
          >
            <Github className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/saiprasadabbireddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-cyber-cyan transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </a>
          <a
            href="https://x.com/AbbireddyPrasad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-cyber-cyan transition-colors duration-300 transform hover:scale-110"
          >
            <Twitter className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </a>
          <a
            href="https://www.codechef.com/users/abbireddy215"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-cyber-cyan transition-colors duration-300 transform hover:scale-110"
          >
            <Code2 className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </a>
          <a
            href="https://drive.google.com/file/d/1yEkz-T44DP_KHGjw9F_atUxoBceW_ukJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-cyber-cyan transition-colors duration-300 transform hover:scale-110"
          >
            <Download className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </a>
        </motion.div>

        {/* Down arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-cyber-cyan" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
