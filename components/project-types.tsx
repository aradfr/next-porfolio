import Image from 'next/image'
import Link from 'next/link'
import { projectTypes } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function ProjectTypes() {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {projectTypes.map(projectType => (
        <li key={projectType.type} className='group relative'>
          <Link href={`/projects/${projectType.type}`}>
            {projectType.image && (
              <div className='h-72 w-full overflow-hidden bg-muted sm:h-60'>
                <Image
                  src={projectType.image}
                  alt={projectType.title || ''}
                  fill
                  className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            )}

            <div className='absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

            <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
              <h2 className='title line-clamp-1 text-xl no-underline'>
                {projectType.title}
              </h2>
              <p className='line-clamp-1 text-sm text-muted-foreground'>
                {projectType.summary}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
