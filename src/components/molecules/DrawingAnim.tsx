"use client";

import { motion } from 'framer-motion';

export const DrawingAnim = () => {
    return (
        <div data-testid="blueprint-drawing" className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M0,50 Q200,50 400,50 T800,50"
                    fill="none"
                    stroke="#1A1A1A"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.rect
                    x="10%" y="10%" width="80%" height="80%"
                    fill="none"
                    stroke="#1A1A1A"
                    strokeWidth="1"
                    strokeOpacity="0.1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, ease: "linear" }}
                />
            </svg>
        </div>
    );
};
