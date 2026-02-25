"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import jobData from "@/app/data/jobs";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function parseYear(dateStr: string): string {
  const match = dateStr.match(/\d{4}/);
  return match ? match[0] : "";
}

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Work experience" className="space-y-6">
      <motion.h2
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold text-foreground"
      >
        Experience
      </motion.h2>
      <div className="relative">
        {jobData.map((job, index) => {
          const year = parseYear(job.JobDate);
          const isLast = index === jobData.length - 1;

          return (
            <div key={index} className="flex gap-4">
              {/* Year + dot + line column */}
              <div className="flex flex-col items-center w-12 shrink-0">
                <span className="text-sm font-medium text-muted-foreground mb-2">
                  {year}
                </span>
                <div className="w-3 h-3 rounded-full bg-foreground border-2 border-background ring-2 ring-foreground shrink-0" />
                {!isLast && <div className="w-0 flex-1 border-l-2 border-border" />}
              </div>

              {/* Card */}
              <motion.div
                className={`flex-1 ${isLast ? "" : "pb-8"}`}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="border border-border hover:border-foreground/20 transition-colors rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="space-y-1">
                      <p className="text-foreground font-semibold">
                        {job.CompanyName}
                      </p>
                      <p className="font-medium text-lg">{job.JobTitle}</p>
                      <p className="text-sm text-muted-foreground">{job.JobDate}</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    {job.JobDescription.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
