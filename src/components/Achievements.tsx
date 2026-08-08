import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Users, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeInUp, staggerContainer, viewport, hoverLift } from "@/lib/motion";

const achievements = [
  {
    icon: Award,
    title: "Performance Optimization Expert",
    description:
      "Reduced API response times by 75% across multiple full-stack projects through strategic caching, database optimization, and code refactoring.",
    metrics: "75% faster response times",
    badge: "Performance",
  },
  {
    icon: TrendingUp,
    title: "Scalability Champion",
    description:
      "Designed systems handling 10x traffic growth without performance degradation. Implemented auto-scaling and load balancing strategies across backend services.",
    metrics: "10x traffic increase",
    badge: "Scalability",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Led a team of 8 developers across 3 major projects spanning backend and frontend. Mentored junior developers and established coding standards and best practices.",
    metrics: "8 team members",
    badge: "Leadership",
  },
  {
    icon: Zap,
    title: "Innovation Award",
    description:
      "Received company-wide recognition for implementing event-driven architecture and early AI tooling that reduced system coupling and improved reliability.",
    metrics: "99.99% uptime",
    badge: "Innovation",
  },
];

const experience = [
  {
    company: "Sparix Global",
    position: "Full Stack Developer",
    period: "Nov 2025 – Present",
    description:
      "Building and scaling backend services and AI-powered features for enterprise applications",
  },
  {
    company: "The Return Journey",
    position: "Backend Developer",
    period: "Jan 2024 – Oct 2025",
    description:
      "Built and maintained high-throughput data processing pipelines",
  },
  {
    company: "Tekniko Global",
    position: "Backend Developer",
    period: "June 2023 – Dec 2023",
    description:
      "Leading backend development for enterprise-scale applications serving 1M+ users",
  },
];

const Achievements = () => {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-background scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Track record"
          title="Experience & Impact"
          subtitle="Proven track record of delivering high-impact, full-stack solutions and leading technical initiatives."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <motion.div key={achievement.title} variants={fadeInUp}>
                <motion.div whileHover={hoverLift} className="h-full">
                  <Card className="group h-full bg-card border-border transition-shadow duration-300 hover:shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center flex-wrap gap-3 mb-3">
                            <h3 className="text-lg font-semibold">
                              {achievement.title}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {achievement.badge}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-3">
                            {achievement.description}
                          </p>
                          <div className="text-sm font-medium text-primary">
                            {achievement.metrics}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            Professional Experience
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.12)}
            className="relative space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-border"
          >
            {experience.map((exp) => (
              <motion.div key={exp.company} variants={fadeInUp} className="relative pl-10">
                <span className="absolute left-[11px] top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary ring-4 ring-background" />
                <Card className="hover:shadow-card transition-shadow duration-300 bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold">
                        {exp.position}
                      </h4>
                      <Badge variant="secondary" className="w-fit font-mono text-xs">
                        {exp.period}
                      </Badge>
                    </div>
                    <h5 className="text-base font-medium text-primary mb-2">
                      {exp.company}
                    </h5>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
