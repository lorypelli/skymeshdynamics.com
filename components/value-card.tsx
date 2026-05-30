'use client';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export function ValueCard({ icon: Icon, title, description, gradient }: ValueCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='group glass-card glass-card-hover morph-hover shimmer relative overflow-hidden rounded-3xl bg-slate-900/90 p-8 transition-all duration-500'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative z-10 flex items-start gap-6'>
        <div className='shrink-0'>
          <div
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500',
              `bg-linear-to-br ${gradient}`,
              isHovered && 'scale-125 rotate-12 shadow-lg',
            )}
          >
            <Icon className='h-6 w-6 text-white' />
          </div>
        </div>
        <div className='space-y-3'>
          <h3 className='text-xl font-semibold text-white'>{title}</h3>
          <p className='leading-relaxed text-slate-300'>{description}</p>
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
