'use client';

import { Button } from '@/components/ui/button';
import { Cpu, Lock, Network } from 'lucide-react';
import { SectionHeader } from './section-header';
import { ServiceCard } from './service-card';

const services = [
  {
    icon: Network,
    title: 'Distributed Hosting',
    description:
      'We offer a decentralized cloud network that ensures operational continuity, high speed, and reduced data latency, improving the overall performance of digital systems.',
    features: ['Global Network', 'Low Latency', 'High Availability', '99.99% Uptime'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cpu,
    title: 'Edge Computing & AI Resource Management',
    description:
      'By processing data closer to the source and using AI algorithms for resource management, we automatically optimize resource allocation based on usage flows.',
    features: ['Edge Processing', 'AI Optimization', 'Auto-scaling', 'Real-time Analytics'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lock,
    title: 'Automated Cybersecurity',
    description:
      'We provide integrated and adaptive data protection, through security solutions that learn and evolve in real time to counter emerging threats.',
    features: ['AI-Powered Security', 'Threat Detection', 'Auto-response', 'Compliance Ready'],
    gradient: 'from-orange-500 to-red-500',
  },
];

interface ServicesProps {
  onContactClick: () => void;
}

export function Services({ onContactClick }: ServicesProps) {
  return (
    <section id='services' className='relative py-32'>
      <div className='container mx-auto px-6'>
        <SectionHeader
          label='Our Services'
          title='AI-Powered Distributed Cloud Solutions'
          description='Engineered to make digital infrastructure faster, more secure, and more intelligent.'
        />

        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-3'>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className='mt-16 text-center'>
          <Button
            size='lg'
            onClick={onContactClick}
            className='liquid-button relative overflow-hidden rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-8 transition-all duration-500 hover:scale-105 hover:from-blue-500 hover:to-purple-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.6),0_20px_40px_rgba(147,51,234,0.4)]'
          >
            <span className='relative z-10'>Contact Us</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
