import { Leaf, Shield, Sparkles, Zap } from 'lucide-react';
import { SectionHeader } from './section-header';
import { ValueCard } from './value-card';

const values = [
  {
    icon: Shield,
    title: 'Reliability',
    description:
      'We ensure operational continuity, security, and stability, protecting essential data through reliable services and rapid interventions, wherever you operate.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Leaf,
    title: 'Energy Efficiency',
    description:
      'We reduce environmental impact by creating sustainable technological systems, using fewer resources and improving performance while fully respecting the planet.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Digital Freedom',
    description:
      'We offer scalable, accessible, and flexible platforms that guarantee control, limitless growth, data protection, and constant innovation.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description:
      'Thanks to artificial intelligence and automation, we push the boundaries of technology to create solutions that simplify and enhance everyday life.',
    gradient: 'from-orange-500 to-red-500',
  },
];

export function Values() {
  return (
    <section id='values' className='relative py-32'>
      <div className='container mx-auto px-6'>
        <SectionHeader label='Our Values' title='Built on principles that matter' />

        <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-2'>
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}
