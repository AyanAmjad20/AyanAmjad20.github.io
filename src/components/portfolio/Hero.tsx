import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";


export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10 " />
      
      <div className="container relative z-10 text-center px-4">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            <AnimatedText text="Ayan Amjad" />
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            <AnimatedText text="Full-Stack Developer"  />
          </p>

          <p>
            📍Toronto, On
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in opacity-0 animation-delay-1000" 
             style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            Computer Engineering Student at Toronto Metropolitan University (Formerly Ryerson)
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in opacity-0"
               style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={scrollToProjects} 
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/20 hover:bg-primary/10 transition-all duration-300"
              asChild   // ✅ lets Button act like an <a>
>
               <a href="/placeholder.txt" download>
                  Download CV
                </a>
            
              
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center animate-fade-in opacity-0"
               style={{ animationDelay: "2s", animationFillMode: "forwards" }}>
            <a href="https://github.com" 
               className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" 
               className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:john@example.com" 
               className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}