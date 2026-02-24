# Developer Portfolio

![Developer Portfolio](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive developer portfolio website built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Showcases your projects, technical skills, and professional work experience with a beautiful, clean design.

## Features

- 🚀 **Project Showcase** — Display projects with featured images, descriptions, and linked skills
- ⚡ **Skills Grid** — Skills organized by category with proficiency level indicators
- 💼 **Work Experience Timeline** — Chronological career history with company details
- 🎨 **Modern Design** — Dark hero with gradient accents, smooth animations, responsive layout
- ⚡ **Server-Side Rendering** — Fast, SEO-optimized pages with Next.js 16 App Router
- 📱 **Fully Responsive** — Beautiful on mobile, tablet, and desktop
- 🔄 **Dynamic Content** — All content managed through Cosmic CMS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=699d5c021ba5a5e6126778ae&clone_repository=699dc3b9a3babb6e30974e77)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "A developer portfolio with projects, skills, and work experience"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content management

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) runtime installed
- A [Cosmic](https://www.cosmicjs.com) account with your portfolio bucket

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

Create a `.env.local` file with:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Cosmic SDK Examples

### Fetching Skills

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: skills } = await cosmic.objects
  .find({ type: 'skills' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Projects with Connected Skills

```typescript
const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes connected skill objects
```

### Fetching Work Experience

```typescript
const { objects: experiences } = await cosmic.objects
  .find({ type: 'work-experience' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This portfolio uses three content types from your Cosmic bucket:

| Content Type | Fields | Purpose |
|---|---|---|
| **Skills** ⚡ | name, category, proficiency | Technical skills with categories and levels |
| **Projects** 🚀 | description, featured_image, project_url, skills_used | Portfolio projects with linked skills |
| **Work Experience** 💼 | company, role, start_date, end_date, description, company_logo | Career timeline |

### Select-Dropdown Values

**Skill Category:** `Frontend`, `Backend`, `Programming Language`, `Design`, `DevOps`

**Skill Proficiency:** `Beginner`, `Intermediate`, `Advanced`, `Expert`

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the repository on [Netlify](https://netlify.com)
3. Set build command to `bun run build`
4. Add environment variables in the Netlify dashboard
5. Deploy

<!-- README_END -->