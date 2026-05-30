import { StickyBanner } from '@/components/sticky-banner';
import { HomeClient } from './home-client';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <StickyBanner />
      <HomeClient />
    </div>
  );
}
