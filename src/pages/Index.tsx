import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;