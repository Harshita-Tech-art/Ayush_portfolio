'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind', 'HTML', 'CSS'],
    color: 'from-blue-500 to-cyan-500',
    image: '/gallery/WhatsApp Image 2026-03-06 at 15.56.45.jpeg',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'MongoDB', 'Firebase', 'Express'],
    color: 'from-green-500 to-emerald-500',
    image: '/gallery/WhatsApp Image 2026-03-06 at 15.56.45 (1).jpeg',
  },
  {
    title: 'AI / ML',
    skills: ['Python', 'Machine Learning', 'Artificial Intelligence'],
    color: 'from-purple-500 to-pink-500',
    image: '/gallery/WhatsApp Image 2026-03-06 at 15.56.46.jpeg',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all group"
              >
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.skills.map(skill => (
                      <li key={skill} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
