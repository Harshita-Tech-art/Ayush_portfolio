import type { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Blog - Ayush Tripathi',
  description: 'Read articles about startup building, AI development, and technology innovation by Ayush Tripathi.',
  keywords: 'blog, startup, AI, development, technology',
};

export default function BlogPage() {
  const posts = [
    {
      slug: 'who-is-ayush-tripathi',
      title: 'Who is Ayush Tripathi?',
      excerpt: 'An introduction to Ayush Tripathi, his journey, and his mission in the tech industry.',
      date: '2024-01-15',
    },
    {
      slug: 'ayush-tripathi-developer-portfolio',
      title: 'Ayush Tripathi Developer Portfolio',
      excerpt: 'Exploring the technical skills and projects that define Ayush Tripathi as a developer.',
      date: '2024-01-10',
    },
    {
      slug: 'building-startups-as-young-founder',
      title: 'Building Startups as a Young Founder',
      excerpt: 'Insights and lessons from building startups like sitekraft.dev and devQBX.in.',
      date: '2024-01-05',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold gradient-text mb-4">Blog</h1>
        <p className="text-xl text-gray-400 mb-12">Thoughts on startups, technology, and innovation</p>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="glass rounded-2xl p-8 hover:bg-white/10 transition cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold group-hover:text-indigo-400 transition">{post.title}</h2>
                  <span className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-300">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-indigo-400 group-hover:gap-3 transition">
                  Read More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
