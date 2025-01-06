import ProjectTypes from '@/components/project-types'
import Projects from '@/components/projects'
import { getProjectByType, getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  //   const projects = await getProjects()
  const projects = await getProjectByType('art')
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>
        <Projects projects={projects} />
      </div>
    </section>
  )
}
