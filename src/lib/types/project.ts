export interface Project {
    id: string;
    title: string;
    description: string;
    client: string;
    year: string;
    tags: string[];
    imageUrl: string;
    metrics?: {
        label: string;
        value: string;
    }[];
}
