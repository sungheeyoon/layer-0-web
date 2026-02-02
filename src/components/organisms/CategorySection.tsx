'use client';

import { Feature, FeatureCategory } from '@/lib/types/feature';
import { Typography } from '../atoms/Typography';
import { FeatureCard } from '../molecules/FeatureCard';

interface CategorySectionProps {
    category: FeatureCategory;
    features: Feature[];
    selectedFeatures: Set<string>;
    onToggleFeature: (id: string) => void;
}

export const CategorySection = ({ category, features, selectedFeatures, onToggleFeature }: CategorySectionProps) => {
    if (features.length === 0) return null;

    return (
        <section className="mb-12">
            <div className="mb-6 border-b border-tech-black pb-2 flex justify-between items-end">
                <div>
                    <Typography variant="h3" className="uppercase tracking-wider">
                        {category.title}
                    </Typography>
                    <Typography variant="body" className="text-sm text-tech-black/50 mt-1">
                        {category.description}
                    </Typography>
                </div>
                <span className="font-mono text-xs text-tech-black/40">
                    {features.length} OPTIONS
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        feature={feature}
                        isSelected={selectedFeatures.has(feature.id)}
                        onToggle={() => onToggleFeature(feature.id)}
                    />
                ))}
            </div>
        </section>
    );
};
