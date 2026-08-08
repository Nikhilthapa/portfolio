import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "get.nikhil1@gmail.com",
    href: "mailto:get.nikhil1@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7007661938",
    href: "tel:+917007661938",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, India",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Nikhilthapa",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhil-thapa-23317918a/",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-secondary scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's Build Something"
          subtitle="Open to full-stack and AI engineering opportunities — always happy to discuss ambitious backend and product ideas."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8">
              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-2">
                    {contactInfo.map((contact) => {
                      const Icon = contact.icon;
                      const content = (
                        <>
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">
                              {contact.label}
                            </div>
                            <div className="font-medium group-hover:text-primary transition-colors">
                              {contact.value}
                            </div>
                          </div>
                        </>
                      );
                      return (
                        <motion.div key={contact.label} variants={fadeInUp}>
                          {contact.href ? (
                            <a
                              href={contact.href}
                              className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                            >
                              {content}
                            </a>
                          ) : (
                            <div className="flex items-center gap-4 p-3 rounded-lg group">
                              {content}
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Social Media</h3>
                  <div className="space-y-2 mb-8">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          variants={fadeInUp}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="font-medium group-hover:text-primary transition-colors">
                            {social.label}
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>

                  <motion.div variants={fadeInUp}>
                    <a href="mailto:get.nikhil1@gmail.com">
                      <Button size="lg" className="w-full">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
