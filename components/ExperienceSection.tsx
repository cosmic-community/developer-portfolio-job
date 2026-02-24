import type { WorkExperience } from '@/types'
import ExperienceCard from '@/components/ExperienceCard'

interface ExperienceSectionProps {
  experiences: WorkExperience[]
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            My professional journey and the companies I&apos;ve contributed to
          </p>
        </div>

        {experiences.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-100 to-purple-100 flex items-center justify-center">
              <span className="text-3xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Experience coming soon
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Add work experience entries to your Cosmic bucket and they&apos;ll
              appear here in chronological order.
            </p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent" />

              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <ExperienceCard
                    key={experience.id}
                    experience={experience}
                    isFirst={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}