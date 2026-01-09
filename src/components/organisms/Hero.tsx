import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Grid } from '@/components/atoms/Grid';
import { DrawingAnim } from '@/components/molecules/DrawingAnim';

export const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center px-6 overflow-hidden">
            <Grid className="" />

            {/* Blueprint Canvas for Animation */}
            <div data-testid="blueprint-canvas" className="absolute inset-0 z-0 pointer-events-none">
                <DrawingAnim />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <Typography variant="caption" className="mb-4 block text-signal-red">
                    FIG. 01 — THE ESSENCE
                </Typography>

                <Typography variant="h1" className="mb-6 max-w-4xl">
                    The Essential Blueprint
                </Typography>

                <Typography variant="body" className="max-w-xl text-lg">
                    Layer 0 translates the invisible essence of your brand into a precise architectural structure.
                    <br className="hidden md:block" />
                    본질의 청사진을 그립니다.
                </Typography>
            </div>
        </section>
    );
};
