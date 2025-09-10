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
    description: "Working effectively in team environments",
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
              
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              I’m a full-stack developer with a strong foundation in React, TypeScript, and Node.js, experienced in building responsive UIs and scalable backends. I focus on clean, maintainable code and enjoy turning complex problems into intuitive solutions. Passionate about modern web technologies, I strive to deliver projects that balance performance, usability, and design.
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
  <div className="space-y-6 text-left">
    <div>
      <h4 className="text-lg font-medium mb-2">Programming Languages</h4>
      <p className="text-muted-foreground">
        HTML, CSS, JavaScript, Python, Java, SQL, MongoDB
      </p>
    </div>

    <div>
      <h4 className="text-lg font-medium mb-2">Technologies</h4>
      <p className="text-muted-foreground">
        React, NodeJS, ExpressJS, SpringBoot, OpenCV, YOLO, AWS, Docker, REST API, Git
      </p>
    </div>
  </div>
</Card>

        </div>
      </div>
    </section>
  );
}