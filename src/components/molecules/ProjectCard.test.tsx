import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from './ProjectCard';
import { Project } from '@/lib/types/project';

const MOCK_PROJECT: Project = {
    id: '01',
    title: 'Test Project',
    description: 'Test Description',
    client: 'Test Client',
    year: '2025',
    tags: ['Tag1', 'Tag2'],
    imageUrl: 'https://example.com/image.jpg',
    metrics: [{ label: 'Metric', value: '100' }]
};

describe('ProjectCard', () => {
    it('renders project details correctly', () => {
        render(<ProjectCard project={MOCK_PROJECT} />);

        // Title appears twice (overlay and details)
        const titles = screen.getAllByText('Test Project');
        expect(titles.length).toBeGreaterThan(0);

        expect(screen.getByText('Test Description')).toBeDefined();
        expect(screen.getAllByText('Tag1').length).toBeGreaterThan(0);
        
        // Client name is combined with ID, so use regex
        expect(screen.getByText(/Test Client/)).toBeDefined();
    });
});
