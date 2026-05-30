'use client';

import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(scrollY > 600);
    };

    document.addEventListener('scroll', toggleVisibility);

    return () => document.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll({
      top: 0,
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'glass-card fixed right-8 bottom-8 z-50 rounded-full p-4 transition-all duration-500',
        'border border-white/20 bg-slate-900/90 hover:border-white/40',
        'hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.6),0_20px_40px_rgba(147,51,234,0.4)]',
        'group overflow-hidden',
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-16 opacity-0',
      )}
      aria-label='Scroll to top'
    >
      <div
        className={cn(
          'absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100',
        )}
      />
      <ArrowUp
        className={cn('relative z-10 h-6 w-6 text-white transition-transform duration-500 group-hover:-translate-y-1')}
      />
    </button>
  );
}
