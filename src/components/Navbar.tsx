import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/60 shadow-card"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-display font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          Nikhil<span className="text-primary">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
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
          <a
            href="/Nikhil_thapa_full_stack.pdf"
            download="Nikhil_Thapa_Resume.pdf"
            className="ml-2"
          >
            <Button size="sm" className="group">
              <Download className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
              Resume
            </Button>
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetTitle className="font-display">Menu</SheetTitle>
            <div className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-foreground/90 hover:bg-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2">
              <a
                href="https://github.com/Nikhilthapa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-thapa-23317918a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
            </div>

            <a
              href="/Nikhil_thapa_full_stack.pdf"
              download="Nikhil_Thapa_Resume.pdf"
              className="mt-4 block"
            >
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
};

export default Navbar;
