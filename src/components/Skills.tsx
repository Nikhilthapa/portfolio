import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript/TypeScript", "Python", "SQL", "Oops"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Node.js", "Express.js", "Nest.js", "loopback 4"],
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "MySQL",
        "DynamoDB",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Apache Kafka", "RabbitMQ", "Prometheus", "Grafana"],
    },
    {
      title: "Architecture Patterns",
      skills: [
        "Microservices",
        "Event-Driven",
        "CQRS",
        "Domain-Driven Design",
        "Clean Architecture",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable backend
            systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 bg-card border-border"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
