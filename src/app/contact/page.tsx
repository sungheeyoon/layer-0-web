import { ContactSection } from '@/components/organisms/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Initiate a secure connection with LAYER 0 for your next architectural project.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}