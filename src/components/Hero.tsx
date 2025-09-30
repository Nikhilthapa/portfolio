import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      <div className="absolute inset-0 bg-background/95"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <Badge variant="secondary" className="mb-6 text-sm font-medium">
          Available for New Opportunities
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
          Nikhil Thapa
        </h1>

        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
          Backend Developer
        </h2>

        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
          Passionate backend engineer with 2.5 years of experience building
          scalable, high-performance systems. Specialized in cloud architecture,
          microservices, and API development using modern technologies like
          Node.js, Python.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/Backend_dev_nikhil.pdf">
            <Button size="lg" className="group relative overflow-hidden">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Download Resume
            </Button>
          </a>
          <div className="flex gap-3">
            <a href="mailto:get.nikhil1@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="hover:shadow-elegant transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://github.com/Nikhilthapa">
              <Button
                variant="outline"
                size="icon"
                className="hover:shadow-elegant transition-all duration-300"
              >
                <Github className="h-4 w-4" />
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/nikhil-thapa-23317918a/">
              <Button
                variant="outline"
                size="icon"
                className="hover:shadow-elegant transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
