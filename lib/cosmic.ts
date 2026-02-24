import { createBucketClient } from '@cosmicjs/sdk'
import type { Skill, Project, WorkExperience, BlogPost } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging',
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Fetch all skills
export async function getSkills(): Promise<Skill[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'skills' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Skill[]
  } catch (error: unknown) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch skills')
  }
}

// Fetch all projects
export async function getProjects(): Promise<Project[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'projects' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Project[]
  } catch (error: unknown) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch projects')
  }
}

// Fetch all work experiences
export async function getWorkExperiences(): Promise<WorkExperience[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'work-experience' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    // Sort by start_date descending (newest first)
    const experiences = response.objects as WorkExperience[]
    return experiences.sort((a, b) => {
      const dateA = new Date(a.metadata?.start_date || '').getTime()
      const dateB = new Date(b.metadata?.start_date || '').getTime()
      return dateB - dateA
    })
  } catch (error: unknown) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch work experiences')
  }
}

// Fetch a single project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'projects',
        slug,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as Project
  } catch (error: unknown) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch project')
  }
}

// Fetch all blog posts (sorted by publish_date descending)
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)

    const posts = response.objects as BlogPost[]
    return posts.sort((a, b) => {
      const dateA = new Date(a.metadata?.publish_date || a.created_at || '').getTime()
      const dateB = new Date(b.metadata?.publish_date || b.created_at || '').getTime()
      return dateB - dateA
    })
  } catch (error: unknown) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch blog posts')
  }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'blog-posts',
        slug,
      })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)

    return response.object as BlogPost
  } catch (error: unknown) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch blog post')
  }
}