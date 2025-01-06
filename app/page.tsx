import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import ProjectByTypes from '@/components/projects-by-types'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <ProjectByTypes />
        <RecentProjects />
        <RecentPosts />
        <NewsletterForm />
      </div>
    </section>
  )
}
