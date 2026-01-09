import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
    it('renders fixed header with logo', () => {
        render(<Header />)
        const header = screen.getByRole('banner')
        expect(header).toBeDefined()
        expect(header.className).toContain('fixed')
        expect(header.className).toContain('top-0')

        // Check for Logo text (or aria-label)
        expect(screen.getByText(/layer 0/i)).toBeDefined()
    })
})
