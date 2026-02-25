"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="about" aria-label="About me" className="space-y-8">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-2 text-center flex flex-col items-center"
      >
        <div className="w-24 h-24 rounded-full overflow-hidden border border-border mx-auto mb-2">
          <Image
            src="https://avatars.githubusercontent.com/u/58681233?v=4"
            alt="Ammar Hussein"
            width={96}
            height={96}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <h1 className="text-4xl font-semibold text-foreground">
          Ammar Hussein
        </h1>
        <p className="text-lg text-muted-foreground font-medium">
          Software Engineer &amp; Technologist
        </p>
        <p className="text-base text-muted-foreground">Toronto, Ontario</p>
        <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed mt-2 text-justify">
          A Software Engineer passionate about delivering scalable, user-centric
          solutions. With expertise in Java, SQL, Angular, and modern stacks like
          Next.js, Supabase, and MongoDB, I build clean architectures and
          optimize data pipelines. Leveraging tools like Apache Spark and Airflow
          for ETL workflows, alongside cloud platforms like AWS and Google Cloud,
          I create efficient, robust solutions. Beyond coding, I mentor youth and
          contribute to community initiatives, striving to use technology for
          meaningful impact.
        </p>
      </motion.div>

      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-4"
      >
        <Link href="/Resume_AH_Feb2025.pdf">
          <Button variant="default" className="rounded-full">
            Resume
          </Button>
        </Link>
        <Link
          href="https://www.github.com/amarzbar"
          aria-label="GitHub"
          className="hover:opacity-70 transition-opacity"
        >
          <FaGithub className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ahusse45"
          aria-label="LinkedIn"
          className="hover:opacity-70 transition-opacity"
        >
          <FaLinkedin className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
        <Link
          href="https://bsky.app/profile/a-marz-bar.bsky.social"
          aria-label="Bluesky"
          className="hover:opacity-70 transition-opacity"
        >
          <FaBluesky className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
        <Link
          href="mailto:ahusse45@uwo.ca"
          aria-label="Email"
          className="hover:opacity-70 transition-opacity"
        >
          <FaEnvelope className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
}
