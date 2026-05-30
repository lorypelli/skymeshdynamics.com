import { VisionCard } from './vision-card';

const visionPoints = [
  {
    number: '1',
    title: 'Distributed Network',
    description: 'Data no longer travels to a single center, but flows freely within an intelligent global network.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    number: '2',
    title: 'Micro Data Centers',
    description: 'An ecosystem of distributed micro-data centers capable of communicating, learning, and adapting.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    number: '3',
    title: 'Living System',
    description: 'Infrastructure that self-optimizes like a natural organism, ensuring faster and safer experiences.',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export function Vision() {
  return (
    <section id='vision' className='relative py-32'>
      <div className='container mx-auto px-6'>
        <div className='mx-auto max-w-5xl'>
          <div className='mb-16 text-center'>
            <h2 className='text-primary mb-4 text-sm font-semibold tracking-wider uppercase'>Our Vision</h2>
            <p className='mb-8 text-4xl font-bold tracking-tight text-balance md:text-5xl'>
              A world of intelligent, distributed infrastructure
            </p>
          </div>

          <div className='space-y-12'>
            <div className='prose prose-lg max-w-none'>
              <p className='text-center text-xl leading-relaxed text-slate-300'>
                Over the next five years, our goal is to expand globally and become a trusted partner for the management
                and evolution of digital infrastructures.
              </p>
            </div>

            <div className='grid gap-8 pt-8 md:grid-cols-3'>
              {visionPoints.map((point, index) => (
                <VisionCard key={index} {...point} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
