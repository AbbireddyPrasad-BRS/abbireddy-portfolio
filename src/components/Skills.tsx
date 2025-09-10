import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Laptop, 
  Brain, 
  Award, 
  Users,
  Clock,
  MessageSquare,
  Target,
  Lightbulb,
  Code2,
  CodeSquareIcon,
  CodeIcon,
  LucideCode2,
  Laptop2,
  BrainCircuit
} from "lucide-react";
import skillsbg from "@/assets/skills-bg.jpg";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "cyber-cyan",
      skills: ["Java", "Python", "C", "C++ (Beginner)", "SQL"]
    },
    {
      title: "Web Technologies",
      icon: Laptop,
      color: "cyber-blue",
      skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "MERN Stack"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "cyber-purple",
      skills: ["LLMs (LLaMA3)", "OCR", "Deep Learning (DL)", "Data Science (DS)", "Natural Language Processing (NLP)"]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "cyber-green",
      skills: ["MongoDB", "MySQL", "SQL Server", "Git", "GitHub", "Linux", "Red Hat"]
    },
    {
      title: "Design & Media",
      icon: Target,
      color: "cyber-pink",
      skills: ["Figma", "Canva", "CapCut AI", "Adobe Premiere Pro", "After Effects"]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb, description: "Analytical thinking and creative solutions" },
    { name: "Leadership", icon: Users, description: "Team management and project coordination" },
    { name: "Communication", icon: MessageSquare, description: "Clear technical and interpersonal communication" },
    { name: "Time Management", icon: Clock, description: "Efficient project planning and execution" }
  ];

  const certifications = [
    "RedHat  Certified System Administrator (RHCSA)",
    "Google AI for Anyone",
    "Data Science with Python - HarvardX",
    "DBMS & IoT - NPTEL",
    "Java & Python Programming - IIT Bombay",
  ];

  return (
    // <section id="skills" className="py-20 bg-background">
  <section
        id="skills"
        className="py-20 relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden animate-fade-in duration-5000"
        style={{
          backgroundImage: `linear-gradient(rgba(23, 0, 0, 0.3), rgba(39, 68, 74, 0.57)), url(${skillsbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
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


      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative AI-powered solutions
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border hover:border-cyber-cyan transition-all duration-500 transform hover:scale-105 hover:shadow-cyber"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-cyber-cyan">
                    <IconComponent className="h-6 w-6 mr-3 group-hover:animate-pulse" />
                    <span className="font-cyber">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        className={`bg-cyber-${category.color}/10 text-cyber-${category.color} border-cyber-${category.color}/30 hover:bg-cyber-${category.color}/20 transition-colors duration-300`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Soft Skills */}
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-cyber-pink transition-all duration-300 hover:shadow-neon hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-cyber-pink flex items-center">
                <Users className="h-6 w-6 mr-3" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="bg-cyber-pink/10 p-3 rounded-lg group-hover:bg-cyber-pink/20 transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-cyber-pink" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{skill.name}</h4>
                        <p className="text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-cyber-yellow transition-all duration-300 hover:shadow-glow-cyan hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-cyber-yellow flex items-center">
                <Award className="h-6 w-6 mr-3" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-cyber-yellow rounded-full group-hover:animate-pulse" />
                    <span className="text-foreground group-hover:text-cyber-yellow transition-colors duration-300">
                      {cert}
                    </span>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-gradient-neon rounded-lg hover:shadow-neon-yellow hover:scale-105 transition-all duration-300">
                  <p className="text-background font-semibold text-center hover:text-cyber-yellow transition-colors duration-300">
                    🏆 Top 15 @ Prajwalan 2K24 National Hackathon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {[
            { value: "9.01 * /10", label: "Current CGPA", color: "cyber-cyan" },
            { value: "5+", label: "Major & Minor Projects", color: "cyber-purple" },
            { value: "1", label: "Global Certifications", color: "cyber-pink" },
            { value: "Top 15", label: "Hackathon Rank", color: "cyber-green" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-cyber font-bold text-cyber-${stat.color} mb-2 animate-glow-pulse`}>
                {stat.value}
              </div>
              <div className="text-muted-background">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;