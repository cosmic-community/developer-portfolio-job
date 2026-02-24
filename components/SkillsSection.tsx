import type { Skill, SkillCategoryKey, CategoryConfig } from '@/types'
import SkillBadge from '@/components/SkillBadge'

interface SkillsSectionProps {
  skills: Skill[]
}

const categoryConfig: Record<SkillCategoryKey, CategoryConfig> = {
  frontend: { label: 'Frontend', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
  backend: { label: 'Backend', icon: '⚙️', color: 'from-green-500 to-emerald-500' },
  language: { label: 'Programming Languages', icon: '💻', color: 'from-purple-500 to-violet-500' },
  design: { label: 'Design', icon: '✏️', color: 'from-pink-500 to-rose-500' },
  devops: { label: 'DevOps', icon: '🚀', color: 'from-orange-500 to-amber-500' },
}

const categoryOrder: SkillCategoryKey[] = ['frontend', 'backend', 'language', 'design', 'devops']

export default function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category
  const skillsByCategory: Record<string, Skill[]> = {}

  for (const skill of skills) {
    const categoryKey = skill.metadata?.category?.key || 'other'
    if (!skillsByCategory[categoryKey]) {
      skillsByCategory[categoryKey] = []
    }
    skillsByCategory[categoryKey]!.push(skill)
  }

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Toolbox
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {skills.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <p className="text-gray-500 text-lg">
              Skills will appear here once added to the CMS.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:gap-10">
            {categoryOrder
              .filter((categoryKey) => {
                const categorySkills = skillsByCategory[categoryKey]
                return categorySkills && categorySkills.length > 0
              })
              .map((categoryKey) => {
                const categorySkills = skillsByCategory[categoryKey]
                const config = categoryConfig[categoryKey]

                if (!categorySkills || !config) {
                  return null
                }

                return (
                  <div key={categoryKey}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xl">{config.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {config.label}
                      </h3>
                      <span className="text-sm text-gray-400">
                        ({categorySkills.length})
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {categorySkills.map((skill) => (
                        <SkillBadge key={skill.id} skill={skill} />
                      ))}
                    </div>
                  </div>
                )
              })}
          </div>
        )}
      </div>
    </section>
  )
}