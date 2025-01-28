"use client";
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import profileImage from '../public/porto.webp';
import {motion} from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';
import jobData from '@/app/data/jobs';
import eduData from './data/education';
import { Card } from '@/components/ui/card';
import { ArrowRight, Badge } from 'lucide-react';
import projects from './data/projects';

export default function Home() {
  return (
   <div className="
   min-h-screen
   bg-white
   dark:bg-black
   text-black dark:text-white
   transition-colors duration-300
   "> 
     <div className="mx-auto max-w-xl px-4 py-20">

        <motion.header 
        
        // Left invis, right vis
        initial={{x: -100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1}}
        
        className="flex items-center justify-between mb-12">
          <div className='w-20 h-20 rounded-full overflow-hidden'>
            <Image src={profileImage} alt="Profile Picture" className="cursor-pointer transition-all duration-300"></Image>
          </div>
          <ThemeToggle/>
        </motion.header>



        <main className='space-y-10'>
          {/* About me  */}
          <section className='space-y-10'>
              <motion.div
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 1}}
              className='space-y-1'>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-green-600 via-rose-500 to-sky-500 bg-clip-text text-transparent inline-block'>Ammar Hussein</h1>
                <p className='text-gray-500 dark:text-gray-400'>Software Engineer</p>
                <p className='text-gray-500 dark:text-gray-400'>Toronto, Ontario</p>
              </motion.div>
              <motion.div
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 1}}
              className='space-y-1'>
                <div className="about-me-section">
                <p className="text-sm text-gray-400 leading-relaxed">
                  A <span className="text-blue-600 font-medium">Software Engineer</span> passionate about delivering scalable, user-centric solutions. With expertise in 
                  <span className="font-semibold"> Java</span>, <span className="font-semibold">SQL</span>, <span className="font-semibold">Angular</span>, and modern stacks like 
                  <span className="font-semibold"> Next.js</span>, <span className="font-semibold">Supabase</span>, and <span className="font-semibold">MongoDB</span>, I build clean architectures and optimize data pipelines. 
                  Leveraging tools like <span className="font-semibold">Apache Spark</span> and <span className="font-semibold">Airflow</span> for ETL workflows, alongside cloud platforms like 
                  <span className="font-semibold"> AWS</span> and <span className="font-semibold">Google Cloud</span>, I create efficient, robust solutions. Beyond coding, I mentor youth and contribute to community initiatives, striving to use technology for meaningful impact.
                </p>

              </div>
              </motion.div>

            {/* Socials / Contact */}
              <motion.div 
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1}}
                className='flex items-center gap-3'>
              
              <Link href="/Resume_AH_Feb2025.pdf" ><Button className='rounded-full bg-gradient-to-r from-rose-400 to-indigo-600 text-white transition-transform hover:scale-105'> Resume </Button></Link>

                <Link href="https://www.github.com/amarzbar" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                {/* Github */}
                <FaGithub className="h-6 w-6"/>
                </Link>
                <Link href="https://www.linkedin.com/in/ahusse45" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                {/* LinkedIn */}
                <FaLinkedin className="h-6 w-6"/>
                </Link>
                <Link href="https://bsky.app/profile/a-marz-bar.bsky.social" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                {/* Bluesky */}
                <FaBluesky className="h-6 w-6"/>
                </Link>

                <Link href="mailto:ahusse45@uwo.ca" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                {/* Email */}
                <FaEnvelope className="h-6 w-6"/>
                </Link>
              </motion.div>



              <motion.section
              initial={{y: 100, opacity: 0}}
              animate={{y: 0, opacity: 1}}  
              transition={{duration: 1}}
              className='space-y-10'>
              <h2 className='text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block'>
              Experience
              </h2>


              {/* Jobs from Job.TS */}
              {jobData.map((job, index) => (
                <div key={index} className="space-y-2 dark:bg-slate-900 bg-slate-200 p-8 rounded-3xl">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className='text-blue-600 dark:text-blue-400'>{job.CompanyName}</p>
                      <p className='font-medium'>{job.JobTitle}</p>

                      <p className='text-sm text-gray-600 dark:text-gray-400'>{job.JobDate}</p>

                    </div>
                  </div>
                  {job.JobDescription.map((desc, i) => (
                    <p key={i} className='text-gray-600 dark:text-gray-400 text-sm'>{desc}</p>
                  ))}
                </div>
              ))}
              </motion.section>

              <motion.section
              initial={{y: 100, opacity: 0}}
              animate={{y: 0, opacity: 1}}  
              transition={{duration: 1}}
              className='space-y-10 '>
              <h2 className='text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block'>
              Education
              </h2>

                {eduData.map((education, index) => (
                <div key={index} className="space-y-2 dark:bg-slate-900 bg-slate-200 p-8 rounded-3xl">
                  <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className='text-blue-600 dark:text-blue-400'>{education.eduDate}</p>
                    <p className='font-medium'>{education.eduTitle}</p>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>{education.eduName}</p>
                    {/* <p className='text-sm text-gray-600 dark:text-gray-400 text-left '>{education.eduDescription}</p> */}

                  </div>
                  </div>
                </div>
                ))}

              </motion.section>

              <motion.section
              initial={{y: 100, opacity: 0}}
              animate={{y: 0, opacity: 1}}  
              transition={{duration: 1}}
              className='space-y-10 '>
              <h2 className='text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block'>
              Projects
              </h2>
              
              {/* Projects from Project.TS Todo source images*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 space-3">
              {projects.map((project) => (
        <Card 
          key={project.name}
          className="bg-gray-50 overflow-auto dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer p-4"
        >
          <Image 
            src="/Github-Logo.wine.svg"
            width={500}
            height={500}
            alt={`${project.name} preview`} 
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <h3 className="font-semibold">{project.name}</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge 
                  key={tech.toLowerCase()} 
                  className="text-xs"
                  >
                  {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {project.description}
              </p>
            </div>
            <Button variant="ghost" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ))}
              </div>

              </motion.section>
          </section>
        </main>
     </div>
   </div>
  );
}
