import type { Metadata } from 'next';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'About Ayush Tripathi - Startup Founder & AI Developer',
  description: 'Learn about Ayush Tripathi, a startup founder, AI developer, and technology innovator building digital products and AI systems.',
  keywords: 'Ayush Tripathi, about, founder, developer, AI, machine learning',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold gradient-text mb-8">About Ayush Tripathi</h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Who Am I?</h2>
            <p>
              Ayush Tripathi is a startup founder, AI developer, and technology innovator based in India. With a passion for building innovative digital products and AI systems, Ayush has founded multiple ventures including sitekraft.dev and devQBX.in.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">My Journey</h2>
            <p>
              Starting as a full-stack developer, Ayush quickly transitioned into entrepreneurship, recognizing the potential to build scalable digital products. His expertise spans across web development, AI/ML, cybersecurity, and startup building.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Startups & Ventures</h2>
            <p>
              <strong>sitekraft.dev</strong> - A startup focused on building modern websites and digital infrastructure for businesses and startups, helping them establish a strong digital presence.
            </p>
            <p>
              <strong>devQBX.in</strong> - A developer ecosystem dedicated to building tools, products, and fostering community for the next generation of builders and innovators.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Expertise</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Full-stack Web Development (React, Next.js, Node.js)</li>
              <li>AI & Machine Learning Systems</li>
              <li>Cybersecurity & Security Research</li>
              <li>Startup Building & Entrepreneurship</li>
              <li>Digital Product Development</li>
              <li>System Design & Architecture</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Mission</h2>
            <p>
              Building powerful digital products, startups, and AI systems that solve real-world problems and create meaningful impact in the technology ecosystem.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
