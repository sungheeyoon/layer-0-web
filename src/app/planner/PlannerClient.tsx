'use client';

import { usePlannerStore } from '@/lib/store/planner';
import { FEATURES, FEATURE_CATEGORIES } from '@/lib/data/features';
import { CategorySection } from '@/components/organisms/CategorySection';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

export default function PlannerPage() {
    const { selectedFeatures, totalPrice, totalComplexity, toggleFeature } = usePlannerStore();
    const formRef = useRef<HTMLElement>(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Group features by category
    const featuresByCategory = FEATURE_CATEGORIES.map(cat => ({
        category: cat,
        features: FEATURES.filter(f => f.category === cat.id)
    }));

    return (
        <main className="min-h-screen bg-off-white pt-24 pb-12 px-6 relative">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                
                {/* Left: Feature Selector */}
                <div className="flex-1 pb-24 lg:pb-0">
                    <div className="mb-12">
                        <Typography variant="caption" className="text-signal-red mb-2 block">
                            PROJECT ARCHITECT
                        </Typography>
                        <Typography variant="h1" className="mb-4">
                            Build Your Vision
                        </Typography>
                        <Typography variant="body" className="max-w-2xl text-tech-black/60">
                            Select the components you need for your digital infrastructure. 
                            We will calculate the estimated scale and provide a blueprint.
                        </Typography>
                    </div>

                    <div className="space-y-4">
                        {featuresByCategory.map(({ category, features }) => (
                            <CategorySection
                                key={category.id}
                                category={category}
                                features={features}
                                selectedFeatures={selectedFeatures}
                                onToggleFeature={toggleFeature}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Spec Sheet (Sticky) */}
                <aside ref={formRef} className="lg:w-80 xl:w-96 flex-shrink-0">
                    <div className="sticky top-24">
                        <div className="bg-tech-black text-off-white p-6 border-l-4 border-signal-red shadow-xl">
                            <div className="mb-6 pb-6 border-b border-white/20">
                                <Typography variant="h3" className="text-white mb-1">
                                    Spec Sheet
                                </Typography>
                                <Typography variant="caption" className="text-white/60 font-mono">
                                    ESTIMATE PREVIEW
                                </Typography>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm opacity-80">Selected Modules</span>
                                    <span className="font-mono text-xl">{selectedFeatures.size}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm opacity-80">Est. Complexity</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div 
                                                className="h-full bg-signal-red"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${Math.min((totalComplexity / 50) * 100, 100)}%` }}
                                            />
                                        </div>
                                        <span className="font-mono text-sm">{totalComplexity}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                    <span className="text-sm font-bold uppercase">Total Estimate</span>
                                    <span data-testid="total-price" className="font-mono text-2xl font-bold text-signal-red">
                                        ${totalPrice.toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            {/* Selected List Preview (Mini) */}
                            <div className="mb-8 space-y-2 max-h-60 overflow-y-auto pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                <AnimatePresence>
                                    {Array.from(selectedFeatures).map(id => {
                                        const f = FEATURES.find(feat => feat.id === id);
                                        if (!f) return null;
                                        return (
                                            <motion.div
                                                key={id}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="flex justify-between text-xs py-1 border-b border-white/10 last:border-0"
                                            >
                                                <span className="opacity-80 truncate mr-2">{f.name}</span>
                                                <span className="font-mono opacity-60">${f.basePrice}</span>
                                            </motion.div>
                                        )
                                    })}
                                    {selectedFeatures.size === 0 && (
                                        <p className="text-xs text-white/40 italic text-center py-4">
                                            No modules selected.
                                        </p>
                                    )}
                                </AnimatePresence>
                            </div>

                            <PlannerForm selectedFeatures={selectedFeatures} />
                        </div>
                    </div>
                </aside>
            </div>

            {/* Mobile Sticky Footer */}
            <AnimatePresence>
                {selectedFeatures.size > 0 && (
                    <motion.div 
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-0 left-0 w-full bg-tech-black text-off-white p-4 lg:hidden border-t-4 border-signal-red z-50 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.3)]"
                    >
                        <div>
                            <span className="text-[10px] opacity-70 block uppercase tracking-widest">Est. Total</span>
                            <span className="font-mono text-xl font-bold text-signal-red">${totalPrice.toLocaleString()}</span>
                        </div>
                        <Button onClick={scrollToForm} size="sm" className="bg-white text-tech-black border-none hover:bg-gray-200">
                            Review & Submit
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

import { useActionState } from 'react';
import { submitPlan } from '@/actions/planner';
import { Input } from '@/components/atoms/Input';

const PlannerForm = ({ selectedFeatures }: { selectedFeatures: Set<string> }) => {
    const [state, formAction, isPending] = useActionState(submitPlan, { success: false, message: '' });

    if (state.success) {
        return (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center p-4 bg-green-900/20 border border-green-500/30 rounded"
            >
                <Typography variant="h3" className="text-green-400 mb-2">Blueprint Received</Typography>
                <Typography variant="body" className="text-xs text-white/70">
                    {state.message}
                </Typography>
            </motion.div>
        )
    }

    return (
        <form action={formAction} className="space-y-4 pt-4 border-t border-white/20">
            <input type="hidden" name="features" value={JSON.stringify(Array.from(selectedFeatures))} />
            
            <div>
                <Input 
                    name="name" 
                    placeholder="Your Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-signal-red"
                />
                {state.errors?.name && <p className="text-signal-red text-[10px] mt-1">{state.errors.name[0]}</p>}
            </div>
            
            <div>
                <Input 
                    name="email" 
                    type="email"
                    placeholder="Email Address" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-signal-red"
                />
                {state.errors?.email && <p className="text-signal-red text-[10px] mt-1">{state.errors.email[0]}</p>}
            </div>

            {state.message && !state.success && (
                <p className="text-signal-red text-xs">{state.message}</p>
            )}

            <Button 
                type="submit" 
                disabled={isPending || selectedFeatures.size === 0}
                className="w-full bg-white text-tech-black hover:bg-gray-200 border-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isPending ? 'Sending...' : 'Request Proposal'}
            </Button>
        </form>
    );
}
