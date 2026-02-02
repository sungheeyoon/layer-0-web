import { describe, it, expect, beforeEach } from 'vitest';
import { usePlannerStore } from './planner';
import { FEATURES } from '../data/features';

describe('Planner Store', () => {
    // Reset store before each test
    beforeEach(() => {
        usePlannerStore.getState().reset();
    });

    it('should initially have no selected features', () => {
        const state = usePlannerStore.getState();
        expect(state.selectedFeatures.size).toBe(0);
        expect(state.totalPrice).toBe(0);
        expect(state.totalComplexity).toBe(0);
    });

    it('should toggle a feature on and off', () => {
        const feature = FEATURES[0]; // Get first feature
        
        // Toggle On
        usePlannerStore.getState().toggleFeature(feature.id);
        let state = usePlannerStore.getState();
        
        expect(state.selectedFeatures.has(feature.id)).toBe(true);
        expect(state.totalPrice).toBe(feature.basePrice);
        expect(state.totalComplexity).toBe(feature.complexity);

        // Toggle Off
        usePlannerStore.getState().toggleFeature(feature.id);
        state = usePlannerStore.getState();
        
        expect(state.selectedFeatures.has(feature.id)).toBe(false);
        expect(state.totalPrice).toBe(0);
        expect(state.totalComplexity).toBe(0);
    });

    it('should accumulate totals correctly', () => {
        const f1 = FEATURES[0];
        const f2 = FEATURES[1];

        usePlannerStore.getState().toggleFeature(f1.id);
        usePlannerStore.getState().toggleFeature(f2.id);
        
        const state = usePlannerStore.getState();
        
        expect(state.selectedFeatures.size).toBe(2);
        expect(state.totalPrice).toBe(f1.basePrice + f2.basePrice);
        expect(state.totalComplexity).toBe(f1.complexity + f2.complexity);
    });

    it('should return selected features list', () => {
        const f1 = FEATURES[0];
        usePlannerStore.getState().toggleFeature(f1.id);
        
        const list = usePlannerStore.getState().getSelectedFeaturesList();
        expect(list).toHaveLength(1);
        expect(list[0].id).toBe(f1.id);
    });
});
