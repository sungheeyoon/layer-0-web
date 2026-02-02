import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectGrid } from './ProjectGrid';
import { Project } from '@/lib/types/project';

const MOCK_PROJECTS: Project[] = [
    {
        id: '01',
        title: 'Project 1',
        description: 'Desc 1',
        client: 'Client 1',
        year: '2025',
        tags: ['Tag1'],
        imageUrl: '/img1.jpg'
    },
    {
        id: '02',
        title: 'Project 2',
        description: 'Desc 2',
        client: 'Client 2',
        year: '2025',
        tags: ['Tag2'],
        imageUrl: '/img2.jpg'
    }
];

describe('ProjectGrid', () => {
    it('renders list of projects', () => {
        render(<ProjectGrid projects={MOCK_PROJECTS} />);
        
        // Check if both project titles are rendered
        // Since ProjectCard renders title twice, checking for existence is enough
        expect(screen.getAllByText('Project 1').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Project 2').length).toBeGreaterThan(0);
    });

    it('renders empty grid when no projects provided', () => {
        const { container } = render(<ProjectGrid projects={[]} />);
        // Should be empty div wrapper
        expect(container.firstChild).toBeEmptyDOMElement();
        // Wait, the wrapper div itself exists but has no children.
        expect(container.firstChild?.childNodes.length).toBe(0);
    });
});
