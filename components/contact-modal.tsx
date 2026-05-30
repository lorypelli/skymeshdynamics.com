'use client';

import { Button } from '@/components/ui/button';
import { Mail, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { IconBadge } from './icon-badge';
import { ModalWrapper } from './modal-wrapper';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMAIL = 'info@skymeshdynamics.com';

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ModalWrapper isOpen={isOpen} isClosing={isClosing} onBackdropClick={handleClose}>
      <button
        onClick={handleClose}
        className='glass-card absolute -top-2 -right-2 rounded-full border border-white/20 bg-slate-800/90 p-2 transition-all duration-500 hover:scale-110 hover:border-white/40 hover:bg-slate-700'
      >
        <X className='h-4 w-4 text-white' />
      </button>

      <IconBadge icon={Mail} className='bg-linear-to-br from-blue-500/20 to-purple-500/20' />

      <h2 className='mb-4 text-center text-2xl font-bold text-balance text-white'>Contact Us</h2>
      <p className='mb-6 text-center leading-relaxed text-slate-300'>
        For information about our services, write to us at:
      </p>

      <div className='glass-card mb-6 rounded-2xl border border-white/20 bg-slate-800/90 p-4 text-center'>
        <p className='bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-lg font-semibold text-transparent'>
          {EMAIL}
        </p>
      </div>

      <div className='flex gap-3'>
        <Button
          onClick={handleCopy}
          className='liquid-button relative z-10 flex-1 overflow-hidden rounded-full bg-linear-to-r from-purple-600 to-blue-600 py-6 text-base font-semibold text-white transition-all duration-500 hover:scale-105 hover:from-purple-500 hover:to-blue-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.6)]'
          size='lg'
        >
          <span className='relative z-10'>{copied ? 'Copied!' : 'Copy Email'}</span>
        </Button>
        <Button
          onClick={handleClose}
          variant='outline'
          className='liquid-button glass-card relative flex-1 overflow-hidden rounded-full border-white/20 bg-linear-to-r from-purple-600 to-blue-600 py-6 text-base font-semibold text-white transition-all duration-500 hover:scale-105 hover:border-white/40 hover:bg-slate-700 hover:from-slate-700 hover:to-slate-600'
          size='lg'
        >
          Close
        </Button>
      </div>
    </ModalWrapper>
  );
}
