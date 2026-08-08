import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { getYearsOfExperience } from "@/lib/utils";

const Hero = () => {
  const yearsOfExperience = getYearsOfExperience();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-background bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_100%)]" />
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[110px] animate-float"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-24 h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-[110px] animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.12, 0.1)}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div variants={fadeInUp}>
          <Badge
            variant="secondary"
            className="mb-6 text-sm font-medium border border-border/60"
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
            Open to Full-Stack &amp; AI Engineering roles
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold mb-5 leading-[1.05]"
        >
          Nikhil Thapa
        </motion.h1>

        <motion.h2
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-display font-semibold mb-8 text-gradient"
        >
          Full-Stack AI Developer
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-6"
        >
          Backend-heavy full-stack engineer with {yearsOfExperience} building
          scalable systems and AI-powered products. I design robust APIs and
          services with{" "}
          <span className="text-foreground font-medium">
            Node.js, NestJS, FastAPI, and Python
          </span>
          , ship modern interfaces with{" "}
          <span className="text-foreground font-medium">
            React, Next.js, and TypeScript
          </span>
          , and integrate{" "}
          <span className="text-foreground font-medium">
            LLMs, RAG pipelines, and LangChain
          </span>{" "}
          into production workflows &mdash; all backed by PostgreSQL, MongoDB,
          Docker, and Kafka.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/Nikhil_thapa_full_stack.pdf"
            download="Nikhil_Thapa_Resume.pdf"
          >
            <Button size="lg" className="group relative overflow-hidden">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </Button>
          </a>
          <div className="flex gap-3">
            <a href="mailto:get.nikhil1@gmail.com" aria-label="Email">
              <Button
                variant="outline"
                size="icon"
                className="hover:shadow-elegant hover:border-primary/50 transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="https://github.com/Nikhilthapa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button
                variant="outline"
                size="icon"
                className="hover:shadow-elegant hover:border-primary/50 transition-all duration-300"
              >
                <Github className="h-4 w-4" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/nikhil-thapa-23317918a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Button
                variant="outline"
                size="icon"
                className="hover:shadow-elegant hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#skills"
        aria-label="Scroll to skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
