'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const socials = [
    { icon: Github, href: 'https://github.com/AYUSHTRIPATHI0', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ayushtripathi00/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@realayush00', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com/ayush_tripthi', label: 'Instagram' },
  ];

  return (
    <footer className="border-t border-white/10 py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Ayush Tripathi</h3>
            <p className="text-gray-400">Building startups, AI products, and digital systems for the future.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
              <li><a href="#startups" className="hover:text-indigo-400 transition">Startups</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
              <li><a href="/blog" className="hover:text-indigo-400 transition">Blog</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:bg-white/10 transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>© 2024 Ayush Tripathi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
