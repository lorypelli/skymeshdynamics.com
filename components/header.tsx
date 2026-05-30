'use client';

import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from './logo';
import { MobileMenu } from './mobile-menu';
import { NavLink } from './nav-link';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <header className='fixed top-16 right-0 left-0 z-50 border-b border-white/10'>
        <div className='container mx-auto px-6 py-3'>
          <nav className='flex items-center justify-between gap-8'>
            <Logo />

            <div className='hidden shrink-0 items-center gap-2 md:flex'>
              <NavLink href='#values' gradient='bg-linear-to-r from-blue-500/20 to-purple-500/20'>
                Values
              </NavLink>
              <NavLink href='#vision' gradient='bg-linear-to-r from-purple-500/20 to-pink-500/20'>
                Vision
              </NavLink>
              <NavLink href='#services' gradient='bg-linear-to-r from-cyan-500/20 to-blue-500/20'>
                Services
              </NavLink>
              <NavLink href='/docs' gradient='bg-linear-to-r from-indigo-500/20 to-violet-500/20'>
                Docs
              </NavLink>
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                'glass-card group relative overflow-hidden rounded-xl border border-white/10 p-2 md:hidden',
                'transition-all duration-500 hover:scale-110 hover:border-white/30',
                'bg-slate-900/80 backdrop-blur-sm',
              )}
              aria-label='Open menu'
            >
              <Menu className='relative z-10 h-6 w-6 text-slate-300 transition-colors duration-300 group-hover:text-white' />
              <div className='absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
              <div
                className={cn(
                  'absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                  'shadow-[0_0_20px_rgba(59,130,246,0.4)]',
                )}
              />
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} isClosing={isClosing} onClose={handleClose} onLinkClick={handleClose} />
    </>
  );
}
