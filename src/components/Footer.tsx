import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#home" className="font-display font-bold text-lg">
            Nikhil<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-muted-foreground mt-1">
            Full-Stack AI Developer &middot; Building backend-heavy, AI-powered
            products.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="mailto:get.nikhil1@gmail.com"
            aria-label="Email"
          >
            <Button variant="ghost" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </a>
          <a
            href="https://github.com/Nikhilthapa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-thapa-23317918a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </a>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="ml-2"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="border-t border-border/60">
        <p className="max-w-6xl mx-auto px-6 py-5 text-center md:text-left text-xs text-muted-foreground font-mono">
          &copy; {year} Nikhil Thapa. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
