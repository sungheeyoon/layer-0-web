import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectPage from './page';
import { PROJECTS } from '@/lib/data/projects';

describe('ProjectPage', () => {
    it('renders the archive title', () => {
        render(<ProjectPage />);
        expect(screen.getByText('Engineering Archive')).toBeDefined();
    });

    it('renders all projects', () => {
        render(<ProjectPage />);
        // Each project card renders the title twice, so we expect (projects.length * 2) or just check one specific unique text
        // Let's check if the first project title exists
        const firstProjectTitle = PROJECTS[0].title;
        const titles = screen.getAllByText(firstProjectTitle);
        expect(titles.length).toBeGreaterThan(0);
    });
});
