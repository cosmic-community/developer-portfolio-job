// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/cosmic'

export const revalidate = 60

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} | Blog`,
    description: post.metadata?.excerpt || '',
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts()
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch {
    return []
  }
}

function formatDate(dateString: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

// Simple markdown to HTML converter for basic formatting
function renderMarkdown(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-10 mb-4">$1</h1>')
    // Bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-gray-100 text-brand-700 text-sm rounded font-mono">$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-600 hover:text-brand-700 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    // Unordered list items
    .replace(/^\- (.*$)/gm, '<li class="ml-4 pl-2">$1</li>')
    .replace(/^\* (.*$)/gm, '<li class="ml-4 pl-2">$1</li>')
    // Blockquotes
    .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-brand-300 pl-4 py-1 my-4 text-gray-600 italic">$1</blockquote>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr class="my-8 border-gray-200" />')
    // Line breaks: double newlines to paragraphs
    .replace(/\n\n/g, '</p><p class="text-gray-600 leading-relaxed mb-4">')
    // Single newlines to br
    .replace(/\n/g, '<br />')

  // Wrap list items in ul
  html = html.replace(
    /(<li[^>]*>.*?<\/li>(?:<br \/>)?)+/g,
    '<ul class="list-disc space-y-1 my-4">$&</ul>'
  )

  // Wrap in paragraph
  html = `<p class="text-gray-600 leading-relaxed mb-4">${html}</p>`

  // Clean up empty paragraphs
  html = html.replace(/<p[^>]*>\s*<\/p>/g, '')

  return html
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const featuredImage = post.metadata?.featured_image
  const content = post.metadata?.content || ''
  const publishedDate = post.metadata?.published_date || post.created_at || ''

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
            href="/blog"
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
            Back to Blog
          </Link>

          {publishedDate && (
            <p className="text-brand-300 text-sm font-medium mb-3">
              {formatDate(publishedDate)}
            </p>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            {post.title}
          </h1>

          {post.metadata?.excerpt && (
            <p className="text-lg text-gray-300 max-w-3xl mt-4">
              {post.metadata.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Featured Image */}
      {featuredImage?.imgix_url && (
        <div className="section-container -mt-4 mb-8 sm:-mt-8 sm:mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={`${featuredImage.imgix_url}?w=1400&h=600&fit=crop&auto=format,compress`}
              alt={post.title}
              width={1400}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="section-container pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
          />

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium transition-colors"
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
              Back to all posts
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}