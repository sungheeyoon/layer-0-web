import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactPage from './page';

// Mock ContactSection
vi.mock('@/components/organisms/ContactSection', () => ({
  ContactSection: () => <div data-testid="mock-contact-section">Contact Section</div>
}));

describe('Contact Page', () => {
  it('renders contact section', () => {
    render(<ContactPage />);
    expect(screen.getByTestId('mock-contact-section')).toBeDefined();
  });
});
