import { Info } from 'lucide-react';

export function StickyBanner() {
  return (
    <div className='glass-card animate-in slide-in-from-top fixed top-2 right-4 left-4 z-60 rounded-2xl border border-white/10 backdrop-blur-xl duration-700'>
      <div className='glow absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10' />

      <div className='relative container mx-auto px-6 py-3'>
        <div className='flex items-center justify-center gap-3'>
          <div className='glass-card rounded-full border border-blue-400/30 p-1.5'>
            <Info className='h-4 w-4 text-blue-400' />
          </div>
          <p className='text-muted-foreground text-sm'>
            <span className='text-foreground font-semibold'>Notice:</span> This is a fictional demonstration website
          </p>
        </div>
      </div>
    </div>
  );
}
