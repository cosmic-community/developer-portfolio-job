import type { Project } from '@/types'
import ProjectCard from '@/components/ProjectCard'

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A selection of projects I&apos;ve built and contributed to
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-100 to-purple-100 flex items-center justify-center">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Projects coming soon
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Add projects to your Cosmic bucket and they&apos;ll appear here
              automatically. Include a featured image, description, and linked
              skills.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}