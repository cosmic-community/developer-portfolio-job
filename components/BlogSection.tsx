import type { BlogPost } from '@/types'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

interface BlogSectionProps {
  posts: BlogPost[]
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on development and technology
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-100 to-purple-100 flex items-center justify-center">
              <span className="text-3xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Blog posts coming soon
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Add blog posts to your Cosmic bucket and they&apos;ll appear here
              automatically.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, 3).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {posts.length > 3 && (
              <div className="text-center mt-12">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
                >
                  View All Posts
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}