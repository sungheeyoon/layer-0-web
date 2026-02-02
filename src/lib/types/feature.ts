export interface Feature {
    id: string;
    category: 'auth' | 'database' | 'payment' | 'analytics' | 'admin' | 'security' | 'communication';
    name: string;
    description: string;
    basePrice: number;
    complexity: number; // 1-10 scale
    isPopular?: boolean;
}

export interface FeatureCategory {
    id: string;
    title: string;
    description: string;
}
