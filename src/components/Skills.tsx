import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import { fadeInUp, staggerContainer, viewport, hoverLift } from "@/lib/motion";
import {
  Braces,
  Server,
  LayoutTemplate,
  Sparkles,
  Database,
  Cloud,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Braces,
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "NestJS", "Express.js", "FastAPI", "REST & GraphQL"],
  },
  {
    title: "Frontend",
    icon: LayoutTemplate,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "AI / LLM Engineering",
    icon: Sparkles,
    skills: [
      "LangChain",
      "RAG Pipelines",
      "LLM APIs (OpenAI)",
      "Vector Databases",
      "Prompt Engineering",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "AWS", "Apache Kafka", "CI/CD"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="What I bring"
          title="Technical Skills"
          subtitle="A full-stack, backend-heavy toolkit for shipping scalable systems and AI-powered products end to end."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.title} variants={fadeInUp}>
                <motion.div whileHover={hoverLift} className="h-full">
                  <Card className="group h-full bg-card border-border transition-shadow duration-300 hover:shadow-elegant hover:border-primary/40">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          {category.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
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

export default Skills;
