import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Users, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Performance Optimization Expert",
      description:
        "Reduced API response times by 75% across multiple projects through strategic caching, database optimization, and code refactoring.",
      metrics: "75% faster response times",
      badge: "Performance",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scalability Champion",
      description:
        "Designed systems handling 10x traffic growth without performance degradation. Implemented auto-scaling and load balancing strategies.",
      metrics: "10x traffic increase",
      badge: "Scalability",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Leadership",
      description:
        "Led a team of 8 backend developers across 3 major projects. Mentored junior developers and established coding standards and best practices.",
      metrics: "8 team members",
      badge: "Leadership",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation Award",
      description:
        "Received company-wide recognition for implementing event-driven architecture that reduced system coupling and improved reliability.",
      metrics: "99.99% uptime",
      badge: "Innovation",
    },
  ];

  const experience = [
    {
      company: "The Return Journey",
      position: "Backend Developer",
      period: "Jan 2024 – Present",
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
    // {
    //   company: "StartupX",
    //   position: "Full Stack Developer",
    //   period: "2016 - 2019",
    //   description: "Developed MVP backend systems and APIs from ground up",
    // },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven track record of delivering high-impact solutions and leading
            technical initiatives
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 bg-card border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold">
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
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="hover:shadow-card transition-all duration-300 bg-card border-border"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h4 className="text-xl font-semibold">
                          {exp.position}
                        </h4>
                        <Badge variant="secondary" className="w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <h5 className="text-lg font-medium text-primary mb-2">
                        {exp.company}
                      </h5>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
