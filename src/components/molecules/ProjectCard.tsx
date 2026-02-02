'use client';

import { Project } from '@/lib/types/project';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typography } from '../atoms/Typography';
import { cn } from '@/utils/cn';

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
    return (
        <motion.div
            className="group relative w-full aspect-[4/3] overflow-hidden border border-tech-black bg-off-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            {/* Layer 1: The Visual (Top Layer) */}
            <div className="absolute inset-0 z-20 transition-all duration-500 ease-in-out group-hover:opacity-0 pointer-events-none">
                <div className="relative w-full h-full">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-tech-black/10" />
                    
                    {/* Minimal Title Overlay */}
                    <div className="absolute bottom-6 left-6">
                         <Typography variant="caption" className="mb-2 text-off-white bg-tech-black px-2 py-0.5 inline-block">
                            {project.id} — {project.client}
                        </Typography>
                        <Typography variant="h3" className="text-white mix-blend-difference">
                            {project.title}
                        </Typography>
                    </div>
                </div>
            </div>

            {/* Layer 2: The Blueprint (Bottom Layer) */}
            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between bg-off-white text-tech-black">
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <Typography variant="caption" className="font-mono text-signal-red">
                            TYPE: {project.tags[0]}
                        </Typography>
                        <Typography variant="caption" className="font-mono opacity-50">
                            YEAR: {project.year}
                        </Typography>
                    </div>
                    
                    <Typography variant="h3" className="mb-4">
                        {project.title}
                    </Typography>
                    
                    <Typography variant="body" className="text-sm opacity-80 mb-6 line-clamp-3">
                        {project.description}
                    </Typography>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs border border-tech-black px-2 py-1 font-mono">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Metrics */}
                {project.metrics && (
                    <div className="grid grid-cols-2 gap-4 border-t border-tech-black pt-4">
                        {project.metrics.map((metric, i) => (
                            <div key={i}>
                                <Typography variant="caption" className="block opacity-50 text-[10px] mb-1">
                                    {metric.label}
                                </Typography>
                                <span className="text-xl font-bold text-signal-red font-mono">
                                    {metric.value}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

