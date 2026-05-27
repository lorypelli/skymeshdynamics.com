import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className='flex items-center gap-2'>
          <Image
            src='/favicon.ico'
            alt='SkyMesh Dynamics'
            width={28}
            height={28}
            className='rounded-full object-contain'
          />
          <span className='text-base font-semibold tracking-tight'>SkyMesh Dynamics</span>
        </div>
      ),
      url: '/',
    },
    links: [
      {
        text: 'Home',
        url: '/',
      },
    ],
    themeSwitch: { enabled: false },
  };
}
