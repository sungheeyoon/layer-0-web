import React from 'react';
import { cn } from '@/utils/cn'; // Assuming utils/cn exists or we need to create it

type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: Variant;
    as?: React.ElementType;
}

const styles = {
    h1: 'text-4xl md:text-6xl font-bold tracking-tight text-tech-black',
    h2: 'text-2xl md:text-3xl font-semibold tracking-tight text-tech-black',
    h3: 'text-xl font-medium text-tech-black',
    body: 'text-base text-tech-black/80 font-normal leading-relaxed',
    caption: 'text-sm text-tech-black/60 font-mono',
};

export const Typography = ({
    variant = 'body',
    as,
    className,
    children,
    ...props
}: TypographyProps) => {
    const Component = as || (variant === 'body' || variant === 'caption' ? 'p' : variant);

    return (
        <Component
            className={cn(styles[variant], className)}
            {...props}
        >
            {children}
        </Component>
    );
};
