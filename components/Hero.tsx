'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-400/10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Ayush Tripathi
            </h1>
            
            <p className="text-2xl md:text-3xl gradient-text font-semibold mb-6">
              Startup Founder • AI Developer • Technology Builder
            </p>
            
            <p className="text-xl text-gray-400 mb-8">
              Building startups, AI products, and digital systems for the future.
            </p>
            
            <p className="text-lg text-gray-300 mb-12">
              Ayush Tripathi is a developer and entrepreneur building innovative technology products through startups like <span className="text-indigo-400">sitekraft.dev</span> and <span className="text-cyan-400">devQBX.in</span>.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="#projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-indigo-500/50 transition"
                >
                  View My Work <ArrowRight size={20} />
                </motion.button>
              </Link>
              
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/AYUSHTRIPATHI0" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-lg hover:bg-indigo-500/20 transition">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ayushtripathi00/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-lg hover:bg-indigo-500/20 transition">
                <Linkedin size={24} />
              </a>
              <a href="https://youtube.com/@realayush00" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-lg hover:bg-indigo-500/20 transition">
                <Youtube size={24} />
              </a>
              <a href="https://instagram.com/ayush_tripthi" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-lg hover:bg-indigo-500/20 transition">
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden glass">
              <Image
                src="/gallery/Ayush.jpeg"
                alt="Ayush Tripathi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
