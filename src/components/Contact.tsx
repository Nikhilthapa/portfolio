import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "get.nikhil1@gmail.com",
      // href: "mailto:get.nikhil1@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7007661938",
      // href: "tel:+91 7007661938",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Noida, India",
      // href: "#",
    },
    // {
    //   icon: <Globe className="h-5 w-5" />,
    //   label: "Website",
    //   value: "alexrichardson.dev",
    //   href: "https://alexrichardson.dev",
    // },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/Nikhilthapa",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nikhil-thapa-23317918a/",
    },
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Always open to discussing new opportunities and exciting backend
            challenges
          </p>
        </div>

        <Card className="bg-card border-border shadow-card">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      // href={contact.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {contact.label}
                        </div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links & CTA */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Social Media</h3>
                <div className="space-y-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {social.icon}
                      </div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>

                <div className="space-y-4">
                  <a href="mailto:get.nikhil1@gmail.com">
                    <Button size="lg" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </a>
                  {/* <Button variant="outline" size="lg" className="w-full">
                    Schedule a Call
                  </Button> */}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
