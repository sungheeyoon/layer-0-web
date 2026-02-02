'use client';

import { Feature } from '@/lib/types/feature';
import { Typography } from '../atoms/Typography';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface FeatureCardProps {
    feature: Feature;
    isSelected: boolean;
    onToggle: () => void;
}

export const FeatureCard = ({ feature, isSelected, onToggle }: FeatureCardProps) => {
    return (
        <motion.div
            onClick={onToggle}
            className={cn(
                "relative p-6 border cursor-pointer transition-colors duration-200 group h-full flex flex-col justify-between",
                isSelected 
                    ? "border-signal-red bg-signal-red/5" 
                    : "border-tech-black/20 hover:border-tech-black bg-white"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            layout
        >
            <div>
                <div className="flex justify-between items-start mb-2">
                    <Typography variant="h3" className={cn("text-lg", isSelected ? "text-signal-red" : "text-tech-black")}>
                        {feature.name}
                    </Typography>
                    {feature.isPopular && (
                        <span className="text-[10px] font-mono border border-signal-red text-signal-red px-1.5 py-0.5 uppercase">
                            Popular
                        </span>
                    )}
                </div>
                
                <Typography variant="body" className="text-sm text-tech-black/60 mb-4 line-clamp-3">
                    {feature.description}
                </Typography>
            </div>

            <div className="flex justify-between items-end border-t border-tech-black/10 pt-4 mt-auto">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-tech-black/40 mb-1">Complexity</span>
                    <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div 
                                key={i} 
                                className={cn(
                                    "w-3 h-1", 
                                    i < Math.ceil(feature.complexity / 2) 
                                        ? "bg-tech-black" 
                                        : "bg-tech-black/10"
                                )} 
                            />
                        ))}
                    </div>
                </div>
                
                <div className="text-right">
                    <span className="text-[10px] uppercase text-tech-black/40 block mb-1">Est. Cost</span>
                    <span className="font-mono font-bold text-tech-black">
                        ${feature.basePrice.toLocaleString()}
                    </span>
                </div>
            </div>

            {/* Selection Indicator */}
            <div className={cn(
                "absolute top-0 right-0 w-0 h-0 border-t-[12px] border-r-[12px] transition-all",
                isSelected ? "border-t-signal-red border-r-signal-red" : "border-transparent"
            )}/>
        </motion.div>
    );
};
