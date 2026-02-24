import type { WorkExperience } from '@/types'

interface ExperienceCardProps {
  experience: WorkExperience
  isFirst: boolean
}

function formatDate(dateString: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

export default function ExperienceCard({
  experience,
  isFirst,
}: ExperienceCardProps) {
  const companyLogo = experience.metadata?.company_logo
  const startDate = experience.metadata?.start_date
  const endDate = experience.metadata?.end_date
  const description = experience.metadata?.description || ''
  const isCurrent = !endDate

  // Strip markdown for display
  const plainDescription = description
    .replace(/[#*_~`>\[\]()!]/g, '')
    .replace(/\n+/g, ' ')
    .trim()

  return (
    <div className="relative pl-8 sm:pl-20 group">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 sm:left-8 top-1 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-colors ${
          isFirst
            ? 'bg-brand-500 border-brand-500 shadow-lg shadow-brand-500/30'
            : 'bg-white border-brand-300 group-hover:border-brand-500 group-hover:bg-brand-100'
        }`}
      />

      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center">
            {companyLogo?.imgix_url ? (
              <img
                src={`${companyLogo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                alt={experience.metadata?.company || 'Company'}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xl">💼</span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <h3 className="text-lg font-bold text-gray-900">
                {experience.metadata?.role || experience.title}
              </h3>
              {isCurrent && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full self-start sm:self-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Current
                </span>
              )}
            </div>

            <p className="text-brand-600 font-medium text-sm mb-2">
              {experience.metadata?.company}
            </p>

            <p className="text-gray-400 text-sm mb-3">
              {startDate ? formatDate(startDate) : ''}
              {startDate ? ' — ' : ''}
              {endDate ? formatDate(endDate) : isCurrent ? 'Present' : ''}
            </p>

            {plainDescription && (
              <p className="text-gray-500 text-sm leading-relaxed">
                {plainDescription}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}