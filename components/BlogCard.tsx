import Link from 'next/link'
import type { BlogPost } from '@/types'

interface BlogCardProps {
  post: BlogPost
}

function formatDate(dateString: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BlogCard({ post }: BlogCardProps) {
  const featuredImage = post.metadata?.featured_image
  const excerpt = post.metadata?.excerpt || ''
  const publishedDate = post.metadata?.published_date || post.created_at || ''

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {featuredImage?.imgix_url ? (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={post.title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">📝</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {publishedDate && (
          <p className="text-brand-600 text-sm font-medium mb-2">
            {formatDate(publishedDate)}
          </p>
        )}

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
          {post.title}
        </h3>

        {excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed flex-1">
            {excerpt.length > 160 ? `${excerpt.slice(0, 160)}...` : excerpt}
          </p>
        )}

        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-medium group-hover:gap-2.5 transition-all">
            Read more
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
          </span>
        </div>
      </div>
    </Link>
  )
}