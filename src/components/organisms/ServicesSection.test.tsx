import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ServicesSection } from './ServicesSection'
import React from 'react'

type MockDivProps = {
    children: React.ReactNode;
};

// Mock Framer Motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: MockDivProps) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }: MockDivProps) => <>{children}</>,
}))

describe('ServicesSection', () => {
    it('renders service layers', () => {
        render(<ServicesSection />)
        // We expect some headings for services
        expect(screen.getByText(/CAPABILITIES/i)).toBeDefined()
        expect(screen.getByText(/Digital Strategy/i)).toBeDefined()
        expect(screen.getByText(/Visual Identity/i)).toBeDefined()
    })

    it('renders accordion interactions', () => {
        // This is a basic check to ensure buttons or interactive elements for accordions exist
        render(<ServicesSection />)
        const buttons = screen.getAllByRole('button')
        expect(buttons.length).toBeGreaterThan(0)
    })
})
