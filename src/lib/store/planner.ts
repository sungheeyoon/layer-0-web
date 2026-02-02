import { create } from 'zustand';
import { Feature } from '../types/feature';
import { FEATURES } from '../data/features';

interface PlannerState {
    selectedFeatures: Set<string>; // Set of Feature IDs
    totalPrice: number;
    totalComplexity: number;
    
    // Actions
    toggleFeature: (featureId: string) => void;
    reset: () => void;
    
    // Selectors (Computed values are often handled in components, but helpers are nice)
    getSelectedFeaturesList: () => Feature[];
}

export const usePlannerStore = create<PlannerState>((set, get) => ({
    selectedFeatures: new Set(),
    totalPrice: 0,
    totalComplexity: 0,

    toggleFeature: (featureId: string) => {
        set((state) => {
            const newSelected = new Set(state.selectedFeatures);
            const feature = FEATURES.find(f => f.id === featureId);

            if (!feature) return state; // Should not happen

            if (newSelected.has(featureId)) {
                newSelected.delete(featureId);
            } else {
                newSelected.add(featureId);
            }

            // Recalculate totals
            let price = 0;
            let complexity = 0;
            newSelected.forEach(id => {
                const f = FEATURES.find(feat => feat.id === id);
                if (f) {
                    price += f.basePrice;
                    complexity += f.complexity;
                }
            });

            return {
                selectedFeatures: newSelected,
                totalPrice: price,
                totalComplexity: complexity
            };
        });
    },

    reset: () => set({ selectedFeatures: new Set(), totalPrice: 0, totalComplexity: 0 }),

    getSelectedFeaturesList: () => {
        const state = get();
        return Array.from(state.selectedFeatures)
            .map(id => FEATURES.find(f => f.id === id))
            .filter((f): f is Feature => !!f);
    }
}));
