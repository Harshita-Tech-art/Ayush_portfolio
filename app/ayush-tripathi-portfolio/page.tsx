import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ayush Tripathi Portfolio - Projects & Work',
  description: 'Explore Ayush Tripathi\'s portfolio of projects including HealthLink, CivicTrack, Vendify, and JoinAQueue. See his work in web development, AI, and startup building.',
  keywords: 'Ayush Tripathi portfolio, projects, HealthLink, CivicTrack, Vendify, JoinAQueue',
};

export default function PortfolioPage() {
  const projects = [
    {
      name: 'HealthLink',
      description: 'AI healthcare assistant web platform providing intelligent health recommendations and medical information.',
      tech: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
    },
    {
      name: 'CivicTrack',
      description: 'Civic issue reporting system enabling citizens to report and track local infrastructure problems.',
      tech: ['Next.js', 'Firebase', 'Geolocation', 'Real-time'],
    },
    {
      name: 'Vendify',
      description: 'Vendor-supplier marketplace platform connecting businesses with service providers.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    },
    {
      name: 'JoinAQueue',
      description: 'Smart queue management product reducing wait times and improving customer experience.',
      tech: ['Next.js', 'WebSocket', 'Redis', 'React'],
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold gradient-text mb-8">Ayush Tripathi Portfolio</h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p>
              Below are some of the key projects Ayush Tripathi has built, showcasing expertise in full-stack development, AI integration, and product design.
            </p>
          </section>

          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.name} className="border-l-4 border-indigo-500 pl-6 py-4">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Project Highlights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Built scalable web applications serving thousands of users</li>
              <li>Integrated AI and machine learning for intelligent features</li>
              <li>Implemented real-time systems with WebSocket and Redis</li>
              <li>Designed and developed marketplace platforms</li>
              <li>Created healthcare and civic tech solutions</li>
              <li>Optimized applications for performance and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Technical Approach</h2>
            <p>
              Each project is built with a focus on clean architecture, scalability, and user experience. Ayush follows best practices in code organization, testing, and deployment to ensure robust and maintainable solutions.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
