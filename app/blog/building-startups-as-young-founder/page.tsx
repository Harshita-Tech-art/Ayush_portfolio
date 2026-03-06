import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Startups as a Young Founder - Blog',
  description: 'Insights and lessons from building startups like sitekraft.dev and devQBX.in.',
};

export default function BlogPost() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-bold gradient-text mb-4">Building Startups as a Young Founder</h1>
      <p className="text-gray-400 mb-8">Published on January 5, 2024</p>

      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-3xl font-bold text-white mb-4">The Founder's Journey</h2>
          <p>
            Building startups as a young founder comes with unique challenges and opportunities. Ayush Tripathi's experience founding sitekraft.dev and devQBX.in provides valuable insights into the startup ecosystem.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Lessons Learned</h2>
          <p>
            Through his entrepreneurial journey, Ayush has learned several key lessons:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Focus on solving real problems, not just building features</li>
            <li>Build products that users actually want</li>
            <li>Iterate quickly based on feedback</li>
            <li>Surround yourself with the right team</li>
            <li>Stay committed to your vision</li>
            <li>Embrace failure as a learning opportunity</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">sitekraft.dev</h2>
          <p>
            sitekraft.dev was founded with the mission to help startups and businesses establish a strong digital presence. By providing modern web solutions and digital infrastructure, sitekraft.dev has become a trusted partner for many businesses.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">devQBX.in</h2>
          <p>
            devQBX.in represents Ayush's vision for building a developer ecosystem. By creating tools, products, and fostering community, devQBX.in aims to empower the next generation of builders and innovators.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Advice for Young Founders</h2>
          <p>
            For aspiring founders, Ayush's advice is simple: start with a problem you're passionate about solving, build a great product, and focus on creating value for your users. The rest will follow.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">The Future</h2>
          <p>
            As Ayush continues to build and innovate, his focus remains on creating products and ventures that make a meaningful impact in the technology ecosystem and beyond.
          </p>
        </section>
      </div>
    </article>
  );
}
