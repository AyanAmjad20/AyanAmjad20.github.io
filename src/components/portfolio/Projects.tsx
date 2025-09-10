import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTaskApp from "@/assets/neurolinklogo.png";
import projectAnalytics from "@/assets/medium.png";

const projects = [
  {
    title: "SpendWise - Full-Stack Receipt & Expense Tracker",
    description: "A modern expense tracking solution with AI-powered receipt scanning, secure AWS-based authentication, and intuitive budget dashboards.",
    image: projectEcommerce,
    tags: ["React", "Spring Boot", "SQL", "AWS", "Docker", "HTML", "CSS", "JavaScript"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Neurolink",
    description: "All in one platform for Alzheimers screening, and care-giver dashboard",
    image: projectTaskApp,
    tags: ["HTML", "CSS", "JavaScript", "NodeJS", "ExpressJS", "MongoDB"],
    github: "https://github.com/AyanAmjad20/neurolink",
  },
  {
    title: "Finshield",
    description: "A real time AI detection platform to support endangered shark species conservation, using machine learning to flag active finning.",
    image: projectAnalytics,
    tags: ["React", "HTML", "CSS", "JavaScript", "Python", "Computer Vision", "Machine Learning"],
    github: "https://github.com/AyanAmjad20/finshield",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-light">
      <div className="container px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development and design skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.live}
                    className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}