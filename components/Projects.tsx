'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Sitekraft.dev',
    description: 'Startup building high-quality websites and digital platforms.',
    tech: ['Next.js', 'React', 'TailwindCSS', 'TypeScript'],
    link: 'https://sitekraft.dev',
    image: '/gallery/WhatsApp Image 2026-03-06 at 15.56.42.jpeg',
  },
  {
    title: 'DevQBX.in',
    description: 'Technology community and development ecosystem.',
    tech: ['Node.js', 'MongoDB', 'React', 'Express'],
    link: 'https://devQBX.in',
    image: '/gallery/WhatsApp Image 2026-03-06 at 15.56.43.jpeg',
  },
  {
    title: 'Health Link',
    description: 'AI based healthcare assistant web application.',
    tech: ['Python', 'Machine Learning', 'React', 'Firebase'],
    link: '#',
    image: '/gallery/WhatsApp Image 2026-03-06 at 15.56.44.jpeg',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all group"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Code2 className="text-indigo-400" size={32} />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-lg hover:bg-indigo-500/20 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm glass rounded-full text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
