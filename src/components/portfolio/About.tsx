import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const skills = [
  { name: "React/TypeScript", level: 95 },
  { name: "Node.js/Express", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Database Design", level: 88 },
  { name: "Cloud Services", level: 82 },
  { name: "DevOps", level: 75 },
];

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating beautiful, intuitive user interfaces",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in agile team environments",
  },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate full-stack developer with 5+ years of experience building 
              web applications that solve real-world problems. My journey in tech started 
              with a curiosity about how things work on the internet, and has evolved into 
              a career focused on creating impactful digital experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              I specialize in modern JavaScript frameworks, cloud architecture, and 
              user-centered design. When I'm not coding, you'll find me exploring new 
              technologies, contributing to open-source projects, or mentoring aspiring developers.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <feature.icon className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-light border-border/50 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `slide-in 1s ease-out ${index * 100}ms`,
                        animationFillMode: "backwards",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}