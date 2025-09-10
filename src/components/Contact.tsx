import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Code, 
  Trophy, 
  ExternalLink,
  Send,
  MapPin,
  Phone,
  Code2,
  CodeSquare,
  Twitter,
  GraduationCap
} from "lucide-react";
import connectbg from "@/assets/connect-bg.jpg";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs.sendForm(
    "service_zawrjra",
    "template_4jbb5ih",
    e.target as HTMLFormElement,
    "p-RDCOm1zktn4fU-2"
  )
  .then(() => {
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setIsSubmitting(false);
  })
  .catch(() => {
    toast({
      title: "Failed to Send ❌",
      description: "Something went wrong, try again later.",
      variant: "destructive",
    });
    setIsSubmitting(false);
  });
};

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/AbbireddyPrasad-BRS",
      icon: Github,
      description: "Check out my repositories",
      color: "hover:text-cyber-green"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saiprasadabbireddy/",
      icon: Linkedin,
      description: "Connect professionally",
      color: "hover:text-cyber-blue"
    },
    {
      name: "GeeksForGeeks",
      url: "https://www.geeksforgeeks.org/user/abbireddysaiprasad/",
      icon: Code2,
      description: "Coding Practice",
      color: "hover:text-cyber-green"
    },
    
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/abbireddy215",
      icon: Trophy,
      description: "Competitive programming",
      color: "hover:text-cyber-yellow"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/prasadAbbireddy",
      icon: CodeSquare,
      description: "Competitive Practice",
      color: "hover:text-cyber-cyan"
    },

    {
      name: "LeetCode",
      url: "https://leetcode.com/u/V_V_S_S_Prasad_Abbireddy/",
      icon: Code,
      description: "Coding challenges",
      color: "hover:text-cyber-white"
    },

    {
      name: "Twitter",
      url: "https://x.com/AbbireddyPrasad",
      icon: Twitter ,
      description: "Connect On X",
      color: "hover:text-cyber-blue"
    },
    {
      name: "Duolingo",
      url: "https://www.duolingo.com/profile/AbbireddyS4",
      icon: GraduationCap,
      description: "Connect On Duolingo",
      color: "hover:text-cyber-pink"
    },
    {
      name: "Portfolio",
      url: "https://abbireddyprasad-brs.github.io/abbireddy-portfolio/",
      icon: ExternalLink,
      description: "Previous portfolio",
      color: "hover:text-cyber-purple"
    }
  ];

  return (
    // <section id="contact" className="py-20 bg-gradient-dark">
      <section
        id="contact"
        className="py-20 relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden animate-fade-in duration-5000"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.59)), url(${connectbg})`,
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
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build something amazing together? Let's discuss your next project!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-cyber-green transition-all duration-300 hover:shadow-glow-cyan">
              <CardHeader>
                <CardTitle className="text-2xl font-cyber text-cyber-green">
                  Find Me Online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center p-4 rounded-lg bg-background/30 border border-border ${link.color} transition-all duration-300 hover:border-current hover:shadow-neon transform hover:scale-105 group`}
                      >
                        <IconComponent className="h-6 w-6 mr-4 flex-shrink-0 group-hover:animate-pulse" />
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-current">
                            {link.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-cyber-pink transition-all duration-300 hover:shadow-neon">
              <CardHeader>
                <CardTitle className="text-2xl font-cyber text-cyber-pink flex items-center">
                  <Mail className="h-6 w-6 mr-3" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-foreground">
                  <Mail className="h-5 w-5 text-cyber-cyan mr-3" />
                  <span>abbireddysaiprasad@gmail.com</span>
                </div>
                <div className="flex items-center text-foreground">
                  <MapPin className="h-5 w-5 text-cyber-cyan mr-3" />
                  <span>Diwancheruvu, AP, India</span>
                </div>
                <div className="flex items-center text-foreground">
                  <Phone className="h-5 w-5 text-cyber-cyan mr-3" />
                  <span>Available for opportunities</span>
                </div>
              </CardContent>
            </Card>
            {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-cyber-cyan transition-all duration-300 hover:shadow-cyber">
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-cyber-cyan flex items-center">
                <Send className="h-6 w-6 mr-3" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <Input
        name="from_name" // 👈 must match EmailJS template variable
        placeholder="Your Name"
        required
        className="bg-background/50 border-border focus:border-cyber-cyan transition-colors"
      />
    </div>
    <div>
      <Input
        type="email"
        name="from_email" // 👈 must match EmailJS template variable
        placeholder="Your Email"
        required
        className="bg-background/50 border-border focus:border-cyber-cyan transition-colors"
      />
    </div>
  </div>

  <Input
    name="subject" // 👈 must match EmailJS template variable
    placeholder="Subject"
    required
    className="bg-background/50 border-border focus:border-cyber-cyan transition-colors"
  />

  <Textarea
    name="message" // 👈 must match EmailJS template variable
    placeholder="Your Message"
    rows={6}
    required
    className="bg-background/50 border-border focus:border-cyber-cyan transition-colors resize-none"
  />

  <Button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-gradient-cyber hover:shadow-glow-blue transition-all duration-300 text-lg py-6 font-semibold transform hover:scale-105"
  >
    {isSubmitting ? (
      <div className="flex items-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-2" />
        Sending...
      </div>
    ) : (
      <>
        <Send className="h-5 w-5 mr-2" />
        Send Message
      </>
    )}
  </Button>
</form>

            </CardContent>
          </Card>

            

            {/* Call to Action */}
            <div className="text-center p-8 bg-gradient-neon rounded-lg">
              <h3 className="text-2xl font-cyber font-bold text-background mb-2">
                Ready to Collaborate?
              </h3>
              <p className="text-background/80 mb-4">
                Let's build something extraordinary together!
              </p>
              <Button
                onClick={() => window.open("mailto:abbireddysaiprasad@gmail.com", "_blank")}
                className="bg-background text-cyber-cyan hover:bg-background/90 transform hover:scale-105"
              >
                <Mail className="h-5 w-5 mr-2" />
                Start Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;