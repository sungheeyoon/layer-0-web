"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@/components/atoms/Typography";
import { cn } from "@/utils/cn";

interface ServiceCardProps {
    number: string;
    title: string;
    description: string;
    details: string[];
    isOpen?: boolean;
    onToggle?: () => void;
}

export const ServiceCard = ({
    number,
    title,
    description,
    details,
    isOpen = false,
    onToggle
}: ServiceCardProps) => {
    return (
        <div className="border-b border-tech-black">
            <button
                onClick={onToggle}
                className="w-full py-8 flex items-start justify-between text-left group transition-colors hover:bg-black/[0.02]"
                aria-expanded={isOpen}
            >
                <div className="flex items-baseline gap-8">
                    <Typography variant="caption" className="font-mono text-signal-red w-8">
                        {number}
                    </Typography>
                    <div>
                        <Typography variant="h3" className="text-3xl font-light group-hover:text-signal-red transition-colors">
                            {title}
                        </Typography>
                    </div>
                </div>

                {/* Plus/Minus Icon */}
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <span className={cn(
                        "absolute h-[1px] w-full bg-tech-black transition-transform duration-300",
                        isOpen && "rotate-180"
                    )} />
                    <span className={cn(
                        "absolute h-full w-[1px] bg-tech-black transition-transform duration-300",
                        isOpen ? "rotate-90" : "rotate-0"
                    )} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="pl-16 pb-8 pr-8">
                            <Typography variant="body" className="mb-6 max-w-2xl text-lg">
                                {description}
                            </Typography>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {details.map((detail, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-signal-red rounded-full" />
                                        <Typography variant="caption" className="text-tech-black/60">
                                            {detail}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
