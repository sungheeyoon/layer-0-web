import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Template from './template';

// Mock Framer Motion is already handled in vitest.setup.ts globally,
// but checking if it renders children is sufficient.

describe('Template', () => {
  it('renders children within motion wrapper', () => {
    render(
      <Template>
        <div data-testid="template-child">Template Content</div>
      </Template>
    );

    expect(screen.getByTestId('template-child')).toBeDefined();
    expect(screen.getByText('Template Content')).toBeDefined();
  });
});
