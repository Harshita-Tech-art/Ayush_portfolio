import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ayush Tripathi Developer Portfolio - Blog',
  description: 'Exploring the technical skills and projects that define Ayush Tripathi as a developer.',
};

export default function BlogPost() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-bold gradient-text mb-4">Ayush Tripathi Developer Portfolio</h1>
      <p className="text-gray-400 mb-8">Published on January 10, 2024</p>

      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Full-Stack Developer</h2>
          <p>
            Ayush Tripathi is a full-stack developer with expertise in modern web technologies. His portfolio showcases projects built with React, Next.js, Node.js, and various other technologies.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Technical Expertise</h2>
          <p>
            With years of experience in web development, Ayush has mastered:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Frontend: React, Next.js, TypeScript, TailwindCSS</li>
            <li>Backend: Node.js, Express, MongoDB, Firebase</li>
            <li>AI/ML: Python, Machine Learning, Data Analysis</li>
            <li>DevOps: Docker, Git, GitHub, CI/CD</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <p>
            Ayush's portfolio includes several notable projects:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>HealthLink</strong> - AI healthcare assistant platform</li>
            <li><strong>CivicTrack</strong> - Civic issue reporting system</li>
            <li><strong>Vendify</strong> - Vendor-supplier marketplace</li>
            <li><strong>JoinAQueue</strong> - Smart queue management</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Development Philosophy</h2>
          <p>
            Ayush believes in writing clean, maintainable code with emphasis on performance and user experience. He follows best practices and stays updated with the latest technologies.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Continuous Learning</h2>
          <p>
            As a developer, Ayush is committed to continuous learning and improvement. He regularly explores new technologies, frameworks, and methodologies to enhance his skills and deliver better solutions.
          </p>
        </section>
      </div>
    </article>
  );
}
