export default function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden">
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

      <div className="relative section-container py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Building digital
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-purple-400">
              experiences
            </span>{' '}
            that matter
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Full-stack developer passionate about creating intuitive, performant
            applications. I turn ideas into elegant, functional software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View My Work
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              My Experience
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-32 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  )
}