import ProjectTypes from '@/components/project-types'
import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()
  // get project types from lib/projects
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>
        <ProjectTypes />
        {/* <Projects projects={projects} /> */}
      </div>
    </section>
  )
}
