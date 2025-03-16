import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content',  'projects')


export type Project = {
  metadata: ProjectMetadata
  content: string
}

export type ProjectType = {
  type : string
  title?: string
  summary?: string
  image?: string 
}

export const projectTypes: ProjectType[] = [
  { type: 'unity',
    title :'Unity Projects',
    image : '/images/project-types/unity.png',
    summary : 'My Unity projects in a glance.'
  },
  { type: 'web',
    title :'Web Projects',
    image : '/images/project-types/web.png',
    summary : 'My Websites and web projects.'
  },
  { type: 'art',
    title :'Art Projects',
    image : '/images/project-types/art.png',
    summary : 'AI arts and 3D modelings.'
  },
  { type: 'software',
    title :'Software Engineering',
    image : '/images/project-types/Software-engineering.webp',
    summary : 'Software Projects'
  }]

export type ProjectMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  type?: string
  slug: string
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null
  }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const projects = files
    .map(file => getProjectMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return projects.slice(0, limit)
  }

  return projects
}

export function getProjectMetadata(filepath: string): ProjectMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
// export function  getProjectByType(type : ProjectType) : Promise<ProjectsMetaData | null >[] {
//   const files = fs.readdirSync(rootDirectory)

//   const projects = files
//     .map(file => getProjectMetadata(file))
//     .filter((a) => {
//       if (a.type === type) return true
//       else return false
//     })

//   return projects.map(project =>{ return project.metadata}

// }
export function getProjectByType(type: string): ProjectMetadata[] {
  const files = fs.readdirSync(rootDirectory);

  const projects = files
    .map(file => getProjectMetadata(file))
    .filter(project => project?.type === type) // Only include projects with the matching type
    

  return projects;
}
//TODO : Add function  getProjectTypes():{}