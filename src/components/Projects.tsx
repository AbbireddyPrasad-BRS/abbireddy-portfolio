import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, Brain, Gamepad2, Rocket } from "lucide-react";
// import projectAiEval from "@/assets/project-ai-eval.jpg";
import projectAiEval from "@/assets/ai-exam-pic.png";
// import projectRps from "@/assets/project-rps.jpg";
import projectRps from "@/assets/rps-project-pic.png";
// import projectSpacex from "@/assets/project-spacex.jpg";
import projectSpacex from "@/assets/spacex-project-pic.png";
import projectbg from "@/assets/projects-bg.png";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  icon: React.ElementType;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Based Exam Evaluation System",
      description: "Revolutionary AI-powered grading system using MERN Stack, LLaMA3, and OCR technology",
      longDescription: "A comprehensive exam evaluation system that leverages artificial intelligence to automatically grade and assess exam papers. Built with modern web technologies and advanced AI models for accurate and efficient evaluation.",
      image: projectAiEval,
      technologies: ["MERN", "LLaMA3", "OCR", "AI", "NLP"],
      features: [
        "Automated paper scanning and text extraction using OCR",
        "LLaMA3 integration for intelligent answer evaluation",
        "Real-time grading with detailed feedback",
        "Comprehensive analytics dashboard",
        "Multi-format support (PDF, images)",
        "Secure student data management"
      ],
      demo: "https://abbireddy-exam-evaluator.onrender.com/",
      github: "https://github.com/AbbireddyPrasad-BRS/ai-exam-evaluator",
      icon: Brain
    },
    {
      id: 2,
      title: "SpaceX-Themed Interactive UI",
      description: "Immersive space-themed interface with cutting-edge design and smooth UX",
      longDescription: "A visually stunning SpaceX-inspired user interface showcasing modern design principles, smooth animations, and engaging user experience design.",
      image: projectSpacex,
      technologies: ["UI/UX", "Figma", "HTML5", "CSS3", "JavaScript" ],
      features: [
        "Space-themed immersive design",
        "Smooth scroll animations",
        "Interactive mission timeline",
        "Responsive across all devices",
        "Modern CSS Grid and Flexbox",
        "Optimized performance"
      ],
      demo: "https://abbireddyprasad-brs.github.io/project-spacex/",
      github: "https://github.com/AbbireddyPrasad-BRS/project-spacex",
      icon: Rocket
    },
    {
      id: 3,
      title: "Rock-Paper-Scissors Online",
      description: "Interactive singleplayer game with real-time gameplay and sleek UI design",
      longDescription: "A fun and engaging multiplayer Rock-Paper-Scissors game featuring real-time gameplay, score tracking, and modern web design principles.",
      image: projectRps,
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      features: [
        "Real-time gameplay",
        "Responsive design for all devices",
        "Score tracking and game history",
        "Smooth animations and transitions",
        "Clean and intuitive user interface",
        "Cross-browser compatibility"
      ],
      demo: "https://abbireddyprasad-rock-paper-scissiors.netlify.app/",
      github: "https://github.com/AbbireddyPrasad-BRS/rock-paper-scissiors",
      icon: Gamepad2
    }
  ];

  return (
    // <section id="projects" className="py-20 bg-background">
    <section
      id="projects"
      className="py-20 relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden animate-fade-in duration-5000"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(53, 43, 7, 0.55)), url(${projectbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {/* Particles Animation */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-5 h-1 bg-cyber-cyan rounded-full animate-float opacity-30"
          style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 1}s`,
          animationDuration: `${3 + Math.random() * 0.5}s`,
          }}
        />
      ))}
    </div>


      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-background max-w-3xl mx-auto">
            A showcase of my technical expertise and creative problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.id}
                className="group bg-card/80 backdrop-blur-sm border-border hover:border-cyber-cyan transition-all duration-500 transform hover:scale-105 hover:shadow-cyber cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-cyber-cyan/20 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="h-6 w-6 text-cyber-cyan" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-cyber text-foreground group-hover:text-cyber-cyan transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-background leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} className="bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/30">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge className="bg-muted text-muted-background">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-sm text-cyber-cyan font-medium">
                      Click to explore →
                    </span>
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.github, "_blank");
                          }}
                          className="text-muted-foreground hover:text-cyber-black"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demo, "_blank");
                          }}
                          className="text-muted-background hover:text-cyber-black"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="py-5 max-w-4xl max-h-[90vh] overflow-y-auto bg-card/70  border-cyber-cyan">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-cyber text-cyber-cyan flex items-center">
                    <selectedProject.icon className="h-8 w-8 mr-3" />
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <p className="text-foreground text-lg leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-cyber text-cyber-cyan mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-cyber-cyan rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-cyber text-cyber-cyan mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} className="bg-gradient-cyber text-background text-sm px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    {selectedProject.github && (
                      <Button 
                        onClick={() => window.open(selectedProject.github, "_blank")}
                        className="bg-gradient-cyber hover:shadow-glow-blue"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        View Code
                      </Button>
                    )}
                    {selectedProject.demo && (
                      <Button 
                        variant="outline"
                        onClick={() => window.open(selectedProject.demo, "_blank")}
                        className="border-cyber-cyan text-cyber-cyan  "
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;