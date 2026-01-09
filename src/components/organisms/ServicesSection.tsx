"use client";

import { useState } from "react";
import { Typography } from "@/components/atoms/Typography";
import { ServiceCard } from "@/components/molecules/ServiceCard";

const SERVICES = [
    {
        number: "01",
        title: "Digital Strategy",
        description: "We define the digital north star for your brand. Our strategic blueprints map out the most efficient path to market dominance.",
        details: ["Market Analysis", "Brand Positioning", "User Persona", "Technical Architecture"]
    },
    {
        number: "02",
        title: "Visual Identity",
        description: "Crafting a visual language that speaks volumes. We engineered design systems that are scalable, consistent, and memorable.",
        details: ["Logo Design", "Design Systems", "Motion Guidelines", "Brand Books"]
    },
    {
        number: "03",
        title: "Web Engineering",
        description: "Translating design into code with zero compromise. We build performant, secure, and scalable web applications.",
        details: ["Next.js Development", "Performance Optimization", "3D WebGL", "CMS Integration"]
    }
];

export const ServicesSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-32 px-6 bg-off-white relative" aria-label="Our Services">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-20">
                    <Typography variant="h2" className="text-sm font-mono text-signal-red mb-4">
                        LAYER 02 — CAPABILITIES
                    </Typography>
                    <Typography variant="h1" className="text-5xl md:text-7xl font-bold tracking-tight">
                        Built for<br />Precision
                    </Typography>
                </div>

                <div className="border-t border-tech-black">
                    {SERVICES.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
