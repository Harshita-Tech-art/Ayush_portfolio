import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ayush Tripathi - Startup Founder & Entrepreneur',
  description: 'Ayush Tripathi is a startup founder and entrepreneur building innovative ventures like sitekraft.dev and devQBX.in. Learn about his entrepreneurial journey.',
  keywords: 'Ayush Tripathi founder, entrepreneur, startup, sitekraft, devQBX',
};

export default function FounderPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold gradient-text mb-8">Ayush Tripathi - Founder</h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Entrepreneurial Vision</h2>
            <p>
              Ayush Tripathi is a startup founder and entrepreneur with a vision to build innovative digital products and AI systems that solve real-world problems. His entrepreneurial journey is driven by a passion for technology and a commitment to creating meaningful impact.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Ventures</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-2">sitekraft.dev</h3>
                <p>
                  A startup focused on building modern websites and digital infrastructure for startups and businesses. sitekraft.dev helps companies establish a strong digital presence through innovative web solutions.
                </p>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2">devQBX.in</h3>
                <p>
                  A developer ecosystem dedicated to building tools, products, and fostering community for the next generation of builders. devQBX.in is creating a platform where developers can collaborate, learn, and build together.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Founder's Philosophy</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Build products that solve real problems</li>
              <li>Focus on user experience and quality</li>
              <li>Create sustainable and scalable businesses</li>
              <li>Foster innovation and continuous improvement</li>
              <li>Build communities around products</li>
              <li>Embrace technology and AI for growth</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Expertise Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-3">Business</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Startup Strategy</li>
                  <li>Product Development</li>
                  <li>Market Analysis</li>
                  <li>Business Growth</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Technology</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Full-Stack Development</li>
                  <li>AI & Machine Learning</li>
                  <li>System Architecture</li>
                  <li>Digital Innovation</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Mission</h2>
            <p>
              To build powerful digital products and startups that create meaningful impact in the technology ecosystem and help businesses and individuals achieve their goals through innovative solutions.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
