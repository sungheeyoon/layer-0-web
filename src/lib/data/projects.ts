import { Project } from '../types/project';

export const PROJECTS: Project[] = [
    {
        id: '01',
        title: 'Void Architecture',
        description: 'A minimal web presence for a conceptual architecture firm, focusing on negative space and structural purity.',
        client: 'Void Arch.',
        year: '2025',
        tags: ['Next.js', 'WebGL', 'Minimalism'],
        imageUrl: 'https://placehold.co/800x600/1a1a1a/f5f5f5?text=VOID',
        metrics: [
            { label: 'Performance', value: '99' },
            { label: 'SEO', value: '100' }
        ]
    },
    {
        id: '02',
        title: 'Neural Dashboard',
        description: 'Real-time data visualization interface for an AI research lab, processing millions of data points with zero latency.',
        client: 'Neural Lab',
        year: '2024',
        tags: ['React', 'D3.js', 'WebSocket'],
        imageUrl: 'https://placehold.co/800x600/1a1a1a/f5f5f5?text=NEURAL',
        metrics: [
            { label: 'Latency', value: '<10ms' }
        ]
    },
    {
        id: '03',
        title: 'Silent Commerce',
        description: 'An e-commerce platform for high-end furniture, designed to disappear behind the product.',
        client: 'Silent Co.',
        year: '2025',
        tags: ['Next.js', 'Shopify', 'Framer Motion'],
        imageUrl: 'https://placehold.co/800x600/1a1a1a/f5f5f5?text=SILENT',
        metrics: [
            { label: 'Conversion', value: '+45%' }
        ]
    }
];

export function getAllProjects(): Project[] {
    return PROJECTS;
}
