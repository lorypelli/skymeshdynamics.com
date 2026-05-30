'use client';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export function ServiceCard({ icon: Icon, title, description, features, gradient }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='group glass-card glass-card-hover morph-hover shimmer relative overflow-hidden rounded-3xl p-8 transition-all duration-500'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative z-10 space-y-6'>
        <div
          className={cn(
            'flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500',
            `bg-linear-to-br ${gradient}`,
            isHovered && 'scale-125 rotate-12 shadow-lg',
          )}
        >
          <Icon className='h-7 w-7 text-white' />
        </div>

        <div className='space-y-3'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='leading-relaxed text-slate-300'>{description}</p>
        </div>

        <div className='space-y-2 pt-4'>
          {features.map((feature, idx) => (
            <div key={idx} className='group/feature flex items-center gap-2 text-sm'>
              <div
                className={cn(
                  'h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover/feature:w-3',
                  `bg-linear-to-r ${gradient}`,
                )}
              />
              <span className='text-slate-300'>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      {isHovered && (
        <div
          className={cn(
            'absolute inset-0 animate-pulse rounded-3xl opacity-20 blur-2xl transition-all duration-500',
            `bg-linear-to-br ${gradient}`,
          )}
        />
      )}
    </div>
  );
}
