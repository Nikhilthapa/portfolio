import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Server, Database, Cloud } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description:
        "Designed and implemented a scalable microservices architecture handling 100K+ daily transactions. Built with Node.js, PostgreSQL, Redis, and deployed on AWS with Docker.",
      role: "Lead Backend Developer",
      responsibilities: [
        "Architected microservices using Domain-Driven Design principles",
        "Implemented event-driven communication with Apache Kafka",
        "Optimized database queries reducing response time by 60%",
        "Set up monitoring and alerting with Prometheus and Grafana",
      ],
      technologies: [
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Kafka",
        "Docker",
        "AWS",
      ],
      icon: <Server className="h-6 w-6" />,
    },
    {
      title: "Real-time Analytics API",
      description:
        "Developed a high-throughput analytics API processing 1M+ events per minute. Used Go for performance-critical components and implemented efficient data aggregation pipelines.",
      role: "Senior Backend Engineer",
      responsibilities: [
        "Built high-performance Go services with sub-millisecond latency",
        "Designed efficient data aggregation algorithms",
        "Implemented real-time streaming with Apache Kafka",
        "Optimized memory usage reducing costs by 40%",
      ],
      technologies: ["Go", "Apache Kafka", "ClickHouse", "Redis", "Kubernetes"],
      icon: <Database className="h-6 w-6" />,
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
      icon: <Cloud className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing expertise in scalable backend
            systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-3 bg-card border-border h-full flex flex-col"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.role}
                  </Badge>
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
                    {project.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
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
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
