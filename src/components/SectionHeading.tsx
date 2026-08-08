import { motion } from "framer-motion";
import { fadeInUp, viewport } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) => {
  const isCenter = align === "center";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUp}
      className={`mb-14 md:mb-16 max-w-2xl ${
        isCenter ? "text-center mx-auto" : "text-left"
      }`}
    >
      <span className="section-eyebrow">
        <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
