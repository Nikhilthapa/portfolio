import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[100px] animate-float"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.15)}
        className="relative z-10 text-center px-6"
      >
        <motion.p
          variants={fadeInUp}
          className="font-mono text-sm tracking-widest uppercase text-primary mb-4"
        >
          404 error
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="text-6xl md:text-8xl font-bold text-gradient mb-6"
        >
          Page Not Found
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mb-10 text-lg text-muted-foreground max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <a href="/">
            <Button size="lg">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
