'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

interface VisionCardProps {
  number: string;
  title: string;
  description: string;
  gradient: string;
}

export function VisionCard({ number, title, description, gradient }: VisionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='group glass-card glass-card-hover morph-hover shimmer relative overflow-hidden rounded-3xl bg-slate-900/90 p-8 transition-all duration-500'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative z-10 space-y-4'>
        <div
          className={cn(
            'flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500',
            `bg-linear-to-br ${gradient}`,
            isHovered && 'scale-125 rotate-12 shadow-lg',
          )}
        >
          <span className='text-2xl font-bold text-white'>{number}</span>
        </div>
        <h3 className='text-xl font-semibold text-white'>{title}</h3>
        <p className='leading-relaxed text-slate-300'>{description}</p>
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
