import type { Skill, SkillProficiencyKey, ProficiencyConfig } from '@/types'

interface SkillBadgeProps {
  skill: Skill
}

const proficiencyConfig: Record<SkillProficiencyKey, ProficiencyConfig> = {
  beginner: {
    label: 'Beginner',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50 border-blue-200',
    width: 'w-1/4',
  },
  intermediate: {
    label: 'Intermediate',
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-50 border-yellow-200',
    width: 'w-2/4',
  },
  advanced: {
    label: 'Advanced',
    color: 'text-green-700',
    bgColor: 'bg-green-50 border-green-200',
    width: 'w-3/4',
  },
  expert: {
    label: 'Expert',
    color: 'text-purple-700',
    bgColor: 'bg-purple-50 border-purple-200',
    width: 'w-full',
  },
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const profKey = (skill.metadata?.proficiency?.key || 'intermediate') as SkillProficiencyKey
  const config = proficiencyConfig[profKey] || proficiencyConfig.intermediate

  return (
    <div
      className={`group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-default ${config.bgColor}`}
    >
      <span className={`font-medium text-sm ${config.color}`}>
        {skill.metadata?.name || skill.title}
      </span>

      {/* Proficiency indicator dots */}
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4].map((level) => {
          const profLevels: Record<SkillProficiencyKey, number> = {
            beginner: 1,
            intermediate: 2,
            advanced: 3,
            expert: 4,
          }
          const currentLevel = profLevels[profKey] || 2
          const isFilled = level <= currentLevel

          return (
            <div
              key={level}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                isFilled ? 'bg-current opacity-80' : 'bg-current opacity-20'
              } ${config.color}`}
            />
          )
        })}
      </div>

      {/* Tooltip on hover */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {config.label}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-gray-900 rotate-45" />
      </div>
    </div>
  )
}