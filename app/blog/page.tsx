import type { Metadata } from 'next'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/cosmic'
import BlogCard from '@/components/BlogCard'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog | Developer Portfolio',
  description: 'Articles, tutorials, and insights on web development and technology.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-brand-950" />
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
            }}
          />
        </div>
        <div className="relative section-container py-16 sm:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-300 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Thoughts, tutorials, and insights on development, design, and technology.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-100 to-purple-100 flex items-center justify-center">
                <span className="text-3xl">📝</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                No posts yet
              </h2>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                Blog posts will appear here once added to the CMS.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
              >
                Back to Portfolio
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}