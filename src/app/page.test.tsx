import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from './page';

// Mock Hero
vi.mock('@/components/organisms/Hero', () => ({
  Hero: () => <div data-testid="mock-hero">Hero Section</div>
}));

describe('Home Page', () => {
  it('renders hero section', () => {
    render(<Home />);
    expect(screen.getByTestId('mock-hero')).toBeDefined();
    expect(screen.getByText('Hero Section')).toBeDefined();
  });
});
