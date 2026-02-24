import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">Portfolio</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-8">
            <a
              href="/#skills"
              className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="/#projects"
              className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="/#experience"
              className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
            >
              Experience
            </a>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
            >
              Blog
            </Link>
          </nav>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  )
}