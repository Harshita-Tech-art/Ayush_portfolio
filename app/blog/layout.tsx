import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog Post - Ayush Tripathi',
  description: 'Read the latest blog post from Ayush Tripathi',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 transition">
          <ArrowLeft size={20} /> Back to Blog
        </Link>
        {children}
      </div>
    </main>
  );
}
