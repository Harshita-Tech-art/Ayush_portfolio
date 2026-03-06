'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="gradient-text">Ayush Tripathi</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass rounded-2xl p-8 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Ayush Tripathi is a developer, entrepreneur, and startup founder from India focused on building scalable technology products.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                He works across multiple domains including artificial intelligence, cybersecurity, web applications, and digital startup systems.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Ayush founded ventures such as <span className="text-indigo-400 font-semibold">sitekraft.dev</span> and <span className="text-cyan-400 font-semibold">devQBX.in</span> to help businesses and individuals leverage modern technology.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                His work spans full-stack development, AI experimentation, and product innovation.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-96 rounded-2xl overflow-hidden glass"
            >
              <Image
                src="/gallery/WhatsApp Image 2026-03-06 at 15.56.44 (2).jpeg"
                alt="Ayush Tripathi"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
