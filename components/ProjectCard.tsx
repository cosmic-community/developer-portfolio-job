import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const featuredImage = project.metadata?.featured_image
  const projectUrl = project.metadata?.project_url
  const skillsUsed = project.metadata?.skills_used
  const description = project.metadata?.description || ''

  // Strip markdown for preview (simple approach)
  const plainDescription = description
    .replace(/[#*_~`>\[\]()!]/g, '')
    .replace(/\n+/g, ' ')
    .trim()
    .slice(0, 150)

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {featuredImage?.imgix_url ? (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={project.title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">🚀</span>
          </div>
        )}

        {/* Overlay on hover */}
        {projectUrl && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
            >
              View Project
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
          {project.title}
        </h3>

        {plainDescription && (
          <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
            {plainDescription}
            {description.length > 150 ? '...' : ''}
          </p>
        )}

        {/* Skills tags */}
        {skillsUsed && skillsUsed.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-100">
            {skillsUsed.map((skill) => (
              <span
                key={skill.id}
                className="inline-flex items-center px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md"
              >
                {skill.metadata?.name || skill.title}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}