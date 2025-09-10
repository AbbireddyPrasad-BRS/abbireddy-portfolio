import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Award, Target, Zap } from "lucide-react";
import redbike from "@/assets/redbike wallpapers.png";
import herobg from "@/assets/hero-bg.jpg";

const About = () => {
  const skills = [
    { name: "Red Hat Linux", level: 90 },
    { name: "React.js / MERN Stack", level: 85 },
    { name: "Java, Python & C", level: 80 },
    { name: "Full-Stack Development & UI/UX", level: 88 },
    { name: "Git, GitHub, LLMs & OCR", level: 50 },
    { name: "AI & Machine Learning", level: 75 },
    { name: "SQL & NoSQL Databases", level: 78 },
    { name: "CapCut, Adobe AfterEffects, Canva, Premiere Pro", level: 95 }
  ];

  const achievements = [
    "Top 15 @ Prajwalan 2K24 National Hackathon",
    "RHCSA Certified Professional",
    "Department Topper with 9.01*/10 GPA",
    "Multiple Technical Certifications"
  ];

  return (
    // <section id="about" className="py-20 bg-gradient-dark">
    <section
      id="about"
      className="py-20 relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden animate-fade-in duration-5000"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.71), rgba(0, 0, 0, 0.41)), url(${herobg})`,
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
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative AI-powered solutions and building impactful web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Education & Story */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-cyber-cyan transition-all duration-300 hover:shadow-cyber hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-8 w-8 text-cyber-cyan mr-4" />
                  <h3 className="text-2xl font-cyber font-bold text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-cyber-cyan">B.Tech in Artificial Intelligence & Machine Learning (AIML)</h4>
                    <p className="text-foreground">Aditya Engineering College, Surampalem</p>
                    <p className="text-foreground">2022 - 2026</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-muted-foreground">Current CGPA upto 6th Semester</span>
                      <Badge className="bg-gradient-cyber text-background font-bold">9.01*/10</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-cyber-pink transition-all duration-300 hover:shadow-neon hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-cyber-pink mr-4" />
                  <h3 className="text-2xl font-style font-cyber font-bold text-foreground">Achievements</h3>
                </div>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <Zap className="h-4 w-4 text-cyber-yellow mr-3 flex-shrink-0" />
                      <span className="text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-cyber-green transition-all duration-300 hover:shadow-glow-cyan hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-cyber-green mr-4" />
                  <h3 className="text-2xl font-cyber font-bold text-foreground">Mission</h3>
                </div>
                <p className="text-foreground leading-relaxed">
                  Building impactful AI-powered web solutions that solve real-world problems. 
                  Exploring the intersection of machine learning and full-stack development to 
                  create innovative applications that make a difference.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Skills */}
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-cyber-purple transition-all duration-300 hover:shadow-cyber hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-2xl font-cyber font-bold text-foreground mb-8 text-center">
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-cyber-cyan font-bold">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-muted"
                        />
                        <div 
                          className="absolute top-0 left-0 h-3 bg-gradient-cyber rounded-full transition-all duration-600 ease-out animate-glow-pulse"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Fact */}
            <div className="mt-8 text-center">
              <div className="inline-block bg-gradient-neon p-4 rounded-lg transform hover:scale-105 transition-transform duration-500">
                <p className="text-background font-cyber font-bold text-lg">
                  💫 Fun Fact: "Building ideas that inspire & impact ✨"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;