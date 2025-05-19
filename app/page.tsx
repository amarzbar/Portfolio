"use client";
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import profileImage from '../public/porto.webp';
import githubPlaceholder from '../public/GitHub-Logo.wine.svg';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';
import jobData from '@/app/data/jobs';
import eduData from './data/education';
import { Card } from '@/components/ui/card';
import { ArrowRight, Badge } from 'lucide-react';
import projects from './data/projects';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent hydration mismatch by rendering nothing until client-side
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-white to-blue-50 dark:from-zinc-900 dark:via-black dark:to-zinc-800 text-black dark:text-white transition-colors duration-300">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-md flex items-center justify-between px-6 py-3 mb-10 rounded-b-2xl border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-4">
          {/* No icon for Ammar Hussein in nav */}
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold text-lg bg-gradient-to-r from-green-500 via-rose-500 to-sky-500 bg-clip-text text-transparent drop-shadow-lg hover:scale-105 transition-transform">Ammar Hussein</button>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-rose-400 transition-colors">Experience</button>
          <button onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })} className="font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-rose-400 transition-colors">Education</button>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-rose-400 transition-colors">Projects</button>
          <ThemeToggle />
        </div>
      </nav>
      <div className="mx-auto max-w-3xl px-4 py-16">
        {/* About me  */}
        <main className="space-y-14">
          <section id="about" className="space-y-8">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-2 text-center flex flex-col items-center"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-zinc-800 bg-gradient-to-tr from-rose-400 via-indigo-400 to-sky-400 p-1 mx-auto mb-2">
                <Image src={profileImage} alt="Profile Picture" className="object-cover w-full h-full scale-110" />
              </div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-500 via-rose-500 to-sky-500 bg-clip-text text-transparent inline-block drop-shadow-lg">
                Ammar Hussein
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">Software Engineer & Technologist</p>
              <p className="text-base text-gray-400 dark:text-gray-500">Toronto, Ontario</p>
              <p className="max-w-2xl mx-auto text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-2 text-justify">
                A <span className="text-blue-600 font-semibold dark:text-blue-400">Software Engineer</span> passionate about delivering scalable, user-centric solutions. With expertise in <span className="font-semibold">Java</span>, <span className="font-semibold">SQL</span>, <span className="font-semibold">Angular</span>, and modern stacks like <span className="font-semibold">Next.js</span>, <span className="font-semibold">Supabase</span>, and <span className="font-semibold">MongoDB</span>, I build clean architectures and optimize data pipelines. Leveraging tools like <span className="font-semibold">Apache Spark</span> and <span className="font-semibold">Airflow</span> for ETL workflows, alongside cloud platforms like <span className="font-semibold">AWS</span> and <span className="font-semibold">Google Cloud</span>, I create efficient, robust solutions. Beyond coding, I mentor youth and contribute to community initiatives, striving to use technology for meaningful impact.
              </p>
            </motion.div>
            {/* Socials / Contact */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-4"
            >
              <Link href="/Resume_AH_Feb2025.pdf">
                <Button className="rounded-full bg-gradient-to-r from-rose-400 to-indigo-600 text-white shadow-lg hover:scale-105 transition-transform">
                  Resume
                </Button>
              </Link>
              <Link href="https://www.github.com/amarzbar" className="hover:scale-110 transition-transform">
                <FaGithub className="h-7 w-7 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
              </Link>
              <Link href="https://www.linkedin.com/in/ahusse45" className="hover:scale-110 transition-transform">
                <FaLinkedin className="h-7 w-7 text-blue-700 dark:text-blue-400" />
              </Link>
              <Link href="https://bsky.app/profile/a-marz-bar.bsky.social" className="hover:scale-110 transition-transform">
                <FaBluesky className="h-7 w-7 text-sky-500 dark:text-sky-400" />
              </Link>
              <Link href="mailto:ahusse45@uwo.ca" className="hover:scale-110 transition-transform">
                <FaEnvelope className="h-7 w-7 text-rose-500 dark:text-rose-400" />
              </Link>
            </motion.div>
          </section>
          {/* Experience Section */}
          <motion.section
            id="experience"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block mb-2">
              Experience
            </h2>
            <div className="space-y-6">
              {jobData.map((job, index) => (
                <Card key={index} className="bg-white/80 dark:bg-zinc-900/80 border-0 shadow-lg hover:shadow-2xl transition-shadow rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="space-y-1">
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">{job.CompanyName}</p>
                      <p className="font-medium text-lg">{job.JobTitle}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{job.JobDate}</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                    {job.JobDescription.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </motion.section>
          {/* Education Section */}
          <motion.section
            id="education"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block mb-2">
              Education
            </h2>
            <div className="space-y-6">
              {eduData.map((education, index) => (
                <Card key={index} className="bg-white/80 dark:bg-zinc-900/80 border-0 shadow-lg hover:shadow-2xl transition-shadow rounded-2xl p-6">
                  <div className="space-y-1 mb-2">
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{education.eduDate}</p>
                    <p className="font-medium text-lg">{education.eduTitle}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{education.eduName}</p>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                    {education.eduDescription && education.eduDescription.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </motion.section>
          {/* Projects Section */}
          <motion.section
            id="projects"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block mb-2">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.name}
                  className="bg-gray-50/90 dark:bg-zinc-900/80 border-0 shadow-lg hover:shadow-2xl transition-shadow rounded-2xl p-5 flex flex-col justify-between min-h-[260px] group"
                >
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition-colors">{project.name}</h3>
                      {project.status && (
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${project.status === 'Public' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'}`}>{project.status}</span>
                      )}
                      {project.license && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 dark:bg-zinc-700 text-gray-600 dark:text-gray-300 font-semibold">{project.license}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech.toLowerCase()} className="text-xs px-2 py-0.5 bg-gradient-to-r from-indigo-200 to-rose-200 dark:from-indigo-900 dark:to-rose-900 text-gray-700 dark:text-gray-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-1">{project.description}</p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button variant="ghost" size="icon" className="hover:bg-indigo-100 dark:hover:bg-indigo-900">
                      <ArrowRight className="h-4 w-4" onClick={() => { open("https://www.github.com/amarzbar") }} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
