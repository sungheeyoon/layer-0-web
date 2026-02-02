'use client';

import { useState } from 'react';
import { Logo } from "@/components/atoms/Logo";
import { Nav } from "@/components/molecules/Nav";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const NAV_ITEMS = [
    { label: 'About', href: '/about' },
    { label: 'Project', href: '/project' },
    { label: 'Planner', href: '/planner' },
    { label: 'Contact', href: '/contact' },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-off-white/80 backdrop-blur-sm border-b border-tech-black/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[70]">
                <div className="flex items-center gap-4">
                    <Logo />
                    <span className="text-xl font-bold tracking-tight text-tech-black hidden md:block">
                        LAYER 0
                    </span>
                </div>

                {/* Desktop Nav */}
                <Nav items={NAV_ITEMS} className="hidden md:flex" />

                {/* Mobile Menu Trigger */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden text-tech-black p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <motion.span 
                            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }}
                            className="w-full h-0.5 bg-tech-black block origin-center"
                        />
                        <motion.span 
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            className="w-full h-0.5 bg-tech-black block"
                        />
                        <motion.span 
                            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
                            className="w-full h-0.5 bg-tech-black block origin-center"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-20 left-0 w-full bg-[#F5F5F5] z-40 md:hidden border-b border-tech-black/10 shadow-2xl overflow-hidden"
                    >
                        <div className="p-8">
                            <nav className="flex flex-col gap-6">
                                {NAV_ITEMS.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-4xl font-light text-tech-black hover:text-signal-red transition-colors tracking-tighter"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                            
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 pt-6 border-t border-tech-black/10"
                            >
                                <p className="text-[10px] text-tech-black/40 font-mono leading-relaxed">
                                    LAYER 0 — THE ESSENTIAL BLUEPRINT<br/>
                                    EST. 2026 / ENGINEERING THE ESSENCE
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
