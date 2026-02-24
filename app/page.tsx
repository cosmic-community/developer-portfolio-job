import Hero from '@/components/Hero'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import { getSkills, getProjects, getWorkExperiences } from '@/lib/cosmic'

export const revalidate = 60

export default async function HomePage() {
  const [skills, projects, experiences] = await Promise.all([
    getSkills(),
    getProjects(),
    getWorkExperiences(),
  ])

  return (
    <>
      <Hero />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experiences={experiences} />
    </>
  )
}