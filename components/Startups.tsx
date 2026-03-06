'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Users } from 'lucide-react';
import Image from 'next/image';

const startups = [
  {
    name: 'sitekraft.dev',
    description: 'A startup focused on building websites and digital solutions for startups and businesses.',
    icon: Rocket,
    image: '/gallery/WhatsApp Image 2026-03-06 at 15.56.43 (1).jpeg',
  },
  {
    name: 'devQBX.in',
    description: 'A technology ecosystem for developers, builders, and innovators.',
    icon: Users,
    image: '/gallery/WhatsApp Image 2026-03-06 at 15.56.44 (1).jpeg',
  },
];

export default function Startups() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="startups" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Founded <span className="gradient-text">Startups</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {startups.map((startup, index) => (
              <motion.div
                key={startup.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all group"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={startup.image}
                    alt={startup.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <startup.icon className="text-indigo-400 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                    {startup.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {startup.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
