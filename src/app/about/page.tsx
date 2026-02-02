import { AboutSection } from '@/components/organisms/AboutSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the philosophy and architectural approach of LAYER 0.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}