import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RootLayout from './layout';

// Mock Header
vi.mock('@/components/organisms/Header', () => ({
  Header: () => <div data-testid="mock-header">Header</div>
}));

// Mock next/font
vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: 'font-geist-sans' }),
  Geist_Mono: () => ({ variable: 'font-geist-mono' }),
}));

describe('RootLayout', () => {
  it('renders header and children', () => {
    render(
      <RootLayout>
        <div data-testid="test-child">Child Content</div>
      </RootLayout>
    );

    expect(screen.getByTestId('mock-header')).toBeDefined();
    expect(screen.getByTestId('test-child')).toBeDefined();
    expect(screen.getByText('Child Content')).toBeDefined();
  });
});
