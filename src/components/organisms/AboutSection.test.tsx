import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { AboutSection } from './AboutSection'

// Mock Framer Motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
}))

describe('AboutSection', () => {
    it('renders the zero point concept text', () => {
        render(<AboutSection />)
        expect(screen.getByText(/ZE\.RO/i)).toBeDefined()
        expect(screen.getByText(/The Origin/i)).toBeDefined()
    })

    it('has accessible section role', () => {
        render(<AboutSection />)
        const section = screen.getByRole('region', { name: /about/i })
        expect(section).toBeDefined()
    })
})
