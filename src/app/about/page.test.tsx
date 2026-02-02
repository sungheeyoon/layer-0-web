import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AboutPage from './page';

// Mock AboutSection
vi.mock('@/components/organisms/AboutSection', () => ({
  AboutSection: () => <div data-testid="mock-about-section">About Section</div>
}));

describe('About Page', () => {
  it('renders about section', () => {
    render(<AboutPage />);
    expect(screen.getByTestId('mock-about-section')).toBeDefined();
  });
});
