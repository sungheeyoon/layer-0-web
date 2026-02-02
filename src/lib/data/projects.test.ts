import { describe, it, expect } from 'vitest';
import { getAllProjects } from './projects';

describe('Project Data', () => {
    it('should return an array of projects', () => {
        const projects = getAllProjects();
        expect(Array.isArray(projects)).toBe(true);
        expect(projects.length).toBeGreaterThan(0);
    });

    it('should have required fields in each project', () => {
        const projects = getAllProjects();
        const project = projects[0];
        
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('tags');
        expect(project).toHaveProperty('imageUrl');
    });
});
