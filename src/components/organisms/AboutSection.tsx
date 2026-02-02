"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/atoms/Typography";
import { PhilosophyCard } from "@/components/molecules/PhilosophyCard";

export const AboutSection = () => {
    return (
        <section
            aria-label="About Layer 0"
            className="relative w-full min-h-screen py-32 px-6 flex flex-col items-center justify-center overflow-hidden bg-off-white"
        >
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Left: The Zero Point Visual */}
                    <div className="flex flex-col items-start relative">
                        {/* Masking Container */}
                        <div className="relative overflow-hidden mb-6">
                            <motion.div
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            >
                                <Typography variant="h2" className="text-8xl font-black relative z-10">
                                    ZE.RO
                                </Typography>
                            </motion.div>
                        </div>

                        <span className="text-[20rem] leading-none font-bold text-tech-black/5 select-none absolute -top-40 -left-20 z-0">
                            0.
                        </span>

                        <div className="h-1 w-24 bg-signal-red mb-8 origin-left" />

                        <Typography variant="h1" className="text-4xl font-bold mb-4">
                            The Origin
                        </Typography>
                        <Typography variant="body" className="text-xl max-w-md text-tech-black/70">
                            Every master plan starts with a single point. We are that point.
                            <br className="mb-4" />
                            모든 위대한 설계는 0점에서 시작됩니다. LAYER 0는 당신의 브랜드가 시작되는 가장 본질적인 지점입니다.
                        </Typography>
                    </div>

                    {/* Right: Philosophy Cards */}
                    <div className="grid gap-6">
                        <PhilosophyCard
                            number="01"
                            title="Precision"
                            description="Engineering logic applied to design."
                            delay={0.2}
                        />
                        <PhilosophyCard
                            number="02"
                            title="Essence"
                            description="Stripping away the non-essential to reveal the core."
                            delay={0.4}
                        />
                        <PhilosophyCard
                            number="03"
                            title="Structure"
                            description="Building systems that scale with your vision."
                            delay={0.6}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
