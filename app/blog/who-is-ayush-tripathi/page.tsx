import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who is Ayush Tripathi? - Blog',
  description: 'An introduction to Ayush Tripathi, his journey, and his mission in the tech industry.',
};

export default function BlogPost() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-bold gradient-text mb-4">Who is Ayush Tripathi?</h1>
      <p className="text-gray-400 mb-8">Published on January 15, 2024</p>

      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
          <p>
            Ayush Tripathi is a startup founder, AI developer, and technology innovator based in India. With a passion for building innovative digital products and AI systems, Ayush has established himself as a key player in the Indian tech ecosystem.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">The Journey Begins</h2>
          <p>
            Starting as a full-stack developer, Ayush quickly realized the potential to build scalable digital products. His journey from developer to founder showcases his commitment to innovation and entrepreneurship.
          </p>
          <p>
            With expertise spanning web development, AI/ML, cybersecurity, and startup building, Ayush brings a unique perspective to technology and business.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Ventures & Impact</h2>
          <p>
            Through ventures like <strong>sitekraft.dev</strong> and <strong>devQBX.in</strong>, Ayush is creating platforms and products that empower businesses and developers. His focus is on building sustainable, scalable solutions that solve real-world problems.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Vision for the Future</h2>
          <p>
            Ayush's vision is to build powerful digital products and AI systems that create meaningful impact. He believes in the power of technology to solve problems and create opportunities for businesses and individuals.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Connect with Ayush</h2>
          <p>
            Interested in collaborating or learning more? Connect with Ayush on LinkedIn, GitHub, or reach out via email. He's always open to discussing technology, startups, and innovation.
          </p>
        </section>
      </div>
    </article>
  );
}
