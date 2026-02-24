import Hero from '@/components/Hero'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import BlogSection from '@/components/BlogSection'
import { getSkills, getProjects, getWorkExperiences, getBlogPosts } from '@/lib/cosmic'

export const revalidate = 60

export default async function HomePage() {
  const [skills, projects, experiences, blogPosts] = await Promise.all([
    getSkills(),
    getProjects(),
    getWorkExperiences(),
    getBlogPosts(),
  ])

  return (
    <>
      <Hero />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experiences={experiences} />
      <BlogSection posts={blogPosts} />
    </>
  )
}