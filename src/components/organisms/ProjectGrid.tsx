'use client';

import { Project } from '@/lib/types/project';
import { ProjectCard } from '../molecules/ProjectCard';
import { motion } from 'framer-motion';

interface ProjectGridProps {
    projects: Project[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
    );
};
