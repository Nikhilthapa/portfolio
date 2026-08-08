import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Server, Database, Cloud, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeInUp, staggerContainer, viewport, hoverLift } from "@/lib/motion";

const projects = [
  {
    title: "AI Knowledge Assistant (RAG)",
    description:
      "Built an internal AI assistant that answers questions over private company documents using retrieval-augmented generation, cutting support lookup time significantly for the team.",
    role: "Full-Stack AI Developer",
    responsibilities: [
      "Designed a RAG pipeline with chunking, embeddings, and a vector store for accurate document retrieval",
      "Orchestrated LLM calls and context injection with LangChain",
      "Built a FastAPI backend exposing chat and ingestion endpoints",
      "Shipped a Next.js chat interface with streaming responses",
    ],
    technologies: [
      "LangChain",
      "FastAPI",
      "Next.js",
      "OpenAI API",
      "Vector DB",
      "PostgreSQL",
    ],
    icon: Sparkles,
    featured: true,
  },
  {
    title: "E-Commerce Microservices Platform",
    description:
      "Designed and implemented a scalable microservices architecture handling 100K+ daily transactions. Built with Node.js/NestJS, PostgreSQL, Redis, and deployed on AWS with Docker.",
    role: "Lead Backend Developer",
    responsibilities: [
      "Architected microservices using Domain-Driven Design principles",
      "Implemented event-driven communication with Apache Kafka",
      "Optimized database queries reducing response time by 60%",
      "Set up monitoring and alerting with Prometheus and Grafana",
    ],
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Kafka", "Docker", "AWS"],
    icon: Server,
  },
  {
    title: "Real-time Analytics API",
    description:
      "Developed a high-throughput analytics API processing 1M+ events per minute. Used Node.js and TypeScript for performance-critical services with efficient data aggregation pipelines.",
    role: "Senior Backend Engineer",
    responsibilities: [
      "Built high-performance NestJS services with low-latency response times",
      "Designed efficient data aggregation algorithms",
      "Implemented real-time streaming with Apache Kafka",
      "Optimized memory usage reducing infrastructure costs by 40%",
    ],
    technologies: ["Node.js", "NestJS", "TypeScript", "Apache Kafka", "Redis", "Kubernetes"],
    icon: Database,
  },
  {
    title: "Cloud-Native Payment Gateway",
    description:
      "Built a secure, PCI-compliant payment processing system handling $10M+ monthly transactions. Implemented with Python FastAPI and deployed on AWS with full observability.",
    role: "Backend Architect",
    responsibilities: [
      "Designed secure payment processing workflows",
      "Implemented PCI DSS compliance measures",
      "Built automated testing and deployment pipelines",
      "Achieved 99.99% uptime with zero payment failures",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "AWS", "Terraform"],
    icon: Cloud,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-gradient-secondary scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          subtitle="Real-world systems spanning backend architecture, full-stack delivery, and applied AI."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div key={project.title} variants={fadeInUp} className="h-full">
                <motion.div whileHover={hoverLift} className="h-full">
                  <Card
                    className={`group h-full flex flex-col bg-card border-border transition-shadow duration-300 hover:shadow-elegant ${
                      project.featured
                        ? "border-primary/40 shadow-elegant"
                        : "hover:border-primary/30"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {project.role}
                        </Badge>
                        {project.featured && (
                          <Badge className="text-xs bg-gradient-primary text-primary-foreground border-0">
                            AI
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-foreground">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {project.responsibilities.map((resp) => (
                            <li key={resp} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-foreground">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <button
                          type="button"
                          disabled
                          className="flex-1 inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-input bg-background text-sm font-medium text-muted-foreground/60 cursor-not-allowed"
                        >
                          <Github className="h-4 w-4" />
                          Private
                        </button>
                        <button
                          type="button"
                          disabled
                          className="flex-1 inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-input bg-background text-sm font-medium text-muted-foreground/60 cursor-not-allowed"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Internal
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
