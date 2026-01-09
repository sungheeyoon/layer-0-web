import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PhilosophyCard } from './PhilosophyCard'

// Mock Framer Motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
}))

describe('PhilosophyCard', () => {
    it('renders title and description', () => {
        // Mock IntersectionObserver if needed globally, but here we mocked motion.div so it should just render
        render(
            <PhilosophyCard
                number="01"
                title="Precision"
                description="Engineering logic."
            />
        )
        expect(screen.getByText('01')).toBeDefined()
        expect(screen.getByText('Precision')).toBeDefined()
        expect(screen.getByText('Engineering logic.')).toBeDefined()
    })
})
