import Image from 'next/image'
import authorImage from '@/public/images/authors/Aradfr.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Arad.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          Versatile Full-Stack Developer with expertise in web, game, and
          blockchain development, backed by a Bachelor&apos;s degree in Computer
          Engineering. Highly adaptable team player with strong problem-solving,
          communication, and collaboration skills. Quick learner with a proven
          ability to master new technologies and frameworks efficiently.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='M.M.Faraji'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
