import React from 'react';
import { cn } from '@/utils/cn';

type GridProps = React.HTMLAttributes<HTMLDivElement>;

export const Grid = ({ className, ...props }: GridProps) => {
    return (
        <div
            className={cn(
                "fixed inset-0 z-[-1] bg-off-white pointer-events-none",
                className
            )}
            {...props}
        >
            {/* Major Grid Lines (120px) */}
            <div
                className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1A1A1A08_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A08_1px,transparent_1px)] bg-[size:120px_120px]"
                aria-hidden="true"
            />
            {/* Minor Grid Lines (24px) */}
            <div
                className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1A1A1A05_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A05_1px,transparent_1px)] bg-[size:24px_24px]"
                aria-hidden="true"
            />
        </div>
    );
};
