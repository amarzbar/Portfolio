"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import eduData from "@/app/data/education";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function EducationSection() {
  return (
    <section id="education" aria-label="Education" className="space-y-6">
      <motion.h2
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold text-foreground"
      >
        Education
      </motion.h2>
      <div className="space-y-6">
        {eduData.map((education, index) => (
          <motion.div
            key={index}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card className="border border-border hover:border-foreground/20 transition-colors rounded-2xl p-6">
              <div className="space-y-1 mb-2">
                <p className="text-foreground font-semibold">
                  {education.eduDate}
                </p>
                <p className="font-medium text-lg">{education.eduTitle}</p>
                <p className="text-sm text-muted-foreground">
                  {education.eduName}
                </p>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                {education.eduDescription?.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
