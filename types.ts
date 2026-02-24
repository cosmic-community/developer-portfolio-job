// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type?: string;
  created_at?: string;
  modified_at?: string;
}

// Select-dropdown field shape
export interface SelectDropdownField {
  key: string;
  value: string;
}

// File metafield shape
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Skill object type
export interface Skill extends CosmicObject {
  metadata: {
    name: string;
    category: SelectDropdownField;
    proficiency: SelectDropdownField;
  };
}

// Skill category type literals (EXACT values from content model)
export type SkillCategoryKey = 'frontend' | 'backend' | 'language' | 'design' | 'devops';
export type SkillCategoryValue = 'Frontend' | 'Backend' | 'Programming Language' | 'Design' | 'DevOps';

// Skill proficiency type literals (EXACT values from content model)
export type SkillProficiencyKey = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type SkillProficiencyValue = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

// Project object type
export interface Project extends CosmicObject {
  metadata: {
    description: string;
    featured_image?: CosmicFile;
    project_url?: string;
    skills_used?: Skill[];
  };
}

// Work Experience object type
export interface WorkExperience extends CosmicObject {
  metadata: {
    company: string;
    role: string;
    start_date: string;
    end_date?: string;
    description?: string;
    company_logo?: CosmicFile;
  };
}

// Category display configuration
export interface CategoryConfig {
  label: string;
  icon: string;
  color: string;
}

// Proficiency display configuration
export interface ProficiencyConfig {
  label: string;
  color: string;
  bgColor: string;
  width: string;
}