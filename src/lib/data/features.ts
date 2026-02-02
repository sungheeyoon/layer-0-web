import { Feature, FeatureCategory } from '../types/feature';

export const FEATURE_CATEGORIES: FeatureCategory[] = [
    { id: 'auth', title: 'Authentication', description: 'User identity and access management' },
    { id: 'database', title: 'Database & Storage', description: 'Data persistence and file storage' },
    { id: 'payment', title: 'Payments', description: 'Monetization and transaction processing' },
    { id: 'analytics', title: 'Analytics', description: 'User behavior and system tracking' },
    { id: 'admin', title: 'Admin Panel', description: 'Internal management dashboards' },
];

export const FEATURES: Feature[] = [
    // Authentication
    {
        id: 'auth-email',
        category: 'auth',
        name: 'Email/Password Auth',
        description: 'Standard sign-up and login with secure password hashing.',
        basePrice: 500,
        complexity: 2,
    },
    {
        id: 'auth-oauth',
        category: 'auth',
        name: 'Social Login (OAuth)',
        description: 'Login with Google, GitHub, or Apple accounts.',
        basePrice: 800,
        complexity: 3,
        isPopular: true,
    },
    {
        id: 'auth-mfa',
        category: 'auth',
        name: 'Multi-Factor Auth (MFA)',
        description: 'Extra layer of security via SMS or Authenticator app.',
        basePrice: 1200,
        complexity: 5,
    },

    // Database
    {
        id: 'db-sql',
        category: 'database',
        name: 'Relational Database (SQL)',
        description: 'Structured data storage (PostgreSQL/MySQL) with complex relationships.',
        basePrice: 1000,
        complexity: 4,
    },
    {
        id: 'db-nosql',
        category: 'database',
        name: 'Document Store (NoSQL)',
        description: 'Flexible data schema (MongoDB/Firestore) for rapid iteration.',
        basePrice: 800,
        complexity: 3,
    },
    {
        id: 'db-storage',
        category: 'database',
        name: 'File Storage (S3)',
        description: 'Secure image, video, and document uploads.',
        basePrice: 600,
        complexity: 2,
    },

    // Payment
    {
        id: 'pay-one',
        category: 'payment',
        name: 'One-time Payments',
        description: 'Simple checkout for single products via Stripe/LemonSqueezy.',
        basePrice: 1500,
        complexity: 5,
        isPopular: true,
    },
    {
        id: 'pay-sub',
        category: 'payment',
        name: 'Subscription Billing',
        description: 'Recurring billing logic with plan management.',
        basePrice: 2500,
        complexity: 7,
    },

    // Analytics
    {
        id: 'anal-basic',
        category: 'analytics',
        name: 'Basic Analytics',
        description: 'Page views and visitor tracking.',
        basePrice: 300,
        complexity: 1,
    },
    {
        id: 'anal-custom',
        category: 'analytics',
        name: 'Custom Events',
        description: 'Track specific user interactions and conversion funnels.',
        basePrice: 800,
        complexity: 3,
    },

    // Admin
    {
        id: 'admin-dash',
        category: 'admin',
        name: 'Dashboard Overview',
        description: 'Visual charts and key metrics summary.',
        basePrice: 1200,
        complexity: 4,
    },
    {
        id: 'admin-crud',
        category: 'admin',
        name: 'Content Management',
        description: 'Full CRUD operations for application content.',
        basePrice: 1500,
        complexity: 5,
    }
];
