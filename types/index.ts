// Cosmic file type
export interface CosmicFile {
  url: string
  imgix_url: string
}

// Skill types
export type SkillCategoryKey = 'frontend' | 'backend' | 'language' | 'design' | 'devops'
export type SkillProficiencyKey = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export interface ProficiencyConfig {
  label: string
  color: string
  bgColor: string
  width: string
}

export interface CategoryConfig {
  label: string
  icon: string
  color: string
}

export interface Skill {
  id: string
  title: string
  slug: string
  metadata: {
    name: string
    category: {
      key: SkillCategoryKey
      value: string
    }
    proficiency: {
      key: SkillProficiencyKey
      value: string
    }
  }
}

// Project types
export interface Project {
  id: string
  title: string
  slug: string
  metadata: {
    description: string
    featured_image?: CosmicFile
    project_url?: string
    skills_used?: Skill[]
  }
}

// Work Experience types
export interface WorkExperience {
  id: string
  title: string
  slug: string
  metadata: {
    company: string
    role: string
    start_date: string
    end_date?: string
    description?: string
    company_logo?: CosmicFile
  }
}

// Author type
export interface Author {
  id: string
  title: string
  slug: string
  metadata: {
    name: string
    bio?: string
    avatar?: CosmicFile
    website?: string
  }
}

// Category type
export interface Category {
  id: string
  title: string
  slug: string
  metadata: {
    name: string
    description?: string
  }
}

// Blog Post types
export interface BlogPost {
  id: string
  title: string
  slug: string
  created_at: string
  metadata: {
    excerpt: string
    content: string
    featured_image?: CosmicFile
    publish_date: string
    author?: Author
    category?: Category
  }
}