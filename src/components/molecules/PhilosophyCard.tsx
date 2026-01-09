"use client";

import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { cn } from "@/utils/cn";

interface PhilosophyCardProps {
    number: string;
    title: string;
    description: string;
    className?: string;
    delay?: number;
}

export const PhilosophyCard = ({ number, title, description, className, delay = 0 }: PhilosophyCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={cn(
                "group relative p-8 border border-tech-black/10 bg-white/50 backdrop-blur-sm transition-all hover:border-signal-red/50",
                className
            )}
        >
            <div className="absolute top-0 left-0 w-0 h-[1px] bg-signal-red transition-all duration-300 group-hover:w-full" />

            <Typography variant="caption" className="text-tech-black/40 mb-4 block font-mono">
                {number}
            </Typography>

            <Typography variant="h3" className="mb-3 group-hover:text-signal-red transition-colors">
                {title}
            </Typography>

            <Typography variant="body" className="text-sm">
                {description}
            </Typography>
        </motion.div>
    );
};
