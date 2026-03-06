import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ayush Tripathi - Full-Stack Developer & AI Engineer',
  description: 'Ayush Tripathi is a full-stack developer specializing in React, Next.js, Node.js, and AI/ML. Building scalable web applications and AI systems.',
  keywords: 'Ayush Tripathi developer, full-stack developer, React developer, Next.js, AI engineer',
};

export default function DeveloperPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold gradient-text mb-8">Ayush Tripathi - Developer</h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Full-Stack Developer</h2>
            <p>
              Ayush Tripathi is a full-stack developer with expertise in modern web technologies and AI systems. With years of experience building scalable applications, Ayush specializes in creating high-performance digital products.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Frontend</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>React & React Hooks</li>
                  <li>Next.js 14 (App Router)</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Backend</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Node.js & Express</li>
                  <li>MongoDB & Firebase</li>
                  <li>RESTful APIs</li>
                  <li>Authentication & Security</li>
                  <li>Database Design</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">AI & Machine Learning</h2>
            <p>
              Beyond traditional web development, Ayush is proficient in AI and machine learning, building intelligent systems that leverage modern AI technologies to solve complex problems.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-4">
              <li>Python & Machine Learning</li>
              <li>AI Model Development</li>
              <li>Natural Language Processing</li>
              <li>Data Analysis & Visualization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p>
              Ayush has built numerous projects including HealthLink (AI healthcare platform), CivicTrack (civic reporting system), Vendify (marketplace platform), and JoinAQueue (queue management system).
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Development Philosophy</h2>
            <p>
              Focused on writing clean, maintainable code with emphasis on performance, security, and user experience. Ayush believes in continuous learning and staying updated with the latest technologies and best practices.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
