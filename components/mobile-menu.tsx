'use client';

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { MobileMenuLink } from './mobile-menu-link';

interface MobileMenuProps {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
  onLinkClick: () => void;
}

export function MobileMenu({ isOpen, isClosing, onClose, onLinkClick }: MobileMenuProps) {
  if (!isOpen && !isClosing) return null;

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-60 bg-black/60 backdrop-blur-sm md:hidden',
          'transition-opacity duration-300',
          isClosing ? 'opacity-0' : 'opacity-100',
        )}
        onClick={onClose}
      />

      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-70 w-70 md:hidden',
          'glass-card border-l border-white/10 bg-slate-900/95 backdrop-blur-xl',
          'transition-transform duration-300 ease-out',
          isClosing ? 'translate-x-full' : 'translate-x-0',
        )}
      >
        <div className='flex h-full flex-col p-6'>
          <div className='mb-8 flex justify-end'>
            <button
              onClick={onClose}
              className={cn(
                'glass-card group relative overflow-hidden rounded-xl border border-white/10 p-2',
                'transition-all duration-500 hover:scale-110 hover:border-white/30',
                'bg-slate-800/80',
              )}
              aria-label='Close menu'
            >
              <X className='relative z-10 h-6 w-6 text-slate-300 transition-colors duration-300 group-hover:text-white' />
              <div className='absolute inset-0 bg-linear-to-r from-slate-700/50 to-slate-600/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
              <div
                className={cn(
                  'absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                  'shadow-[0_0_20px_rgba(148,163,184,0.4)]',
                )}
              />
            </button>
          </div>

          <nav className='flex flex-col gap-4'>
            <MobileMenuLink
              href='#values'
              gradient='bg-linear-to-r from-blue-500/30 to-purple-500/30'
              shadowColor='shadow-[0_0_30px_rgba(59,130,246,0.5)]'
              onClick={onLinkClick}
            >
              Values
            </MobileMenuLink>
            <MobileMenuLink
              href='#vision'
              gradient='bg-linear-to-r from-purple-500/30 to-pink-500/30'
              shadowColor='shadow-[0_0_30px_rgba(147,51,234,0.5)]'
              onClick={onLinkClick}
            >
              Vision
            </MobileMenuLink>
            <MobileMenuLink
              href='#services'
              gradient='bg-linear-to-r from-cyan-500/30 to-blue-500/30'
              shadowColor='shadow-[0_0_30px_rgba(6,182,212,0.5)]'
              onClick={onLinkClick}
            >
              Services
            </MobileMenuLink>
            <MobileMenuLink
              href='/docs'
              gradient='bg-linear-to-r from-indigo-500/30 to-violet-500/30'
              shadowColor='shadow-[0_0_30px_rgba(99,102,241,0.5)]'
              onClick={onLinkClick}
            >
              Docs
            </MobileMenuLink>
          </nav>
        </div>
      </div>
    </>
  );
}
