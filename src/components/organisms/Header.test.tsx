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

    it('renders new navigation links', () => {
        render(<Header />)
        const aboutLink = screen.getByText('About')
        expect(aboutLink).toBeDefined()
        expect(aboutLink.closest('a')).toHaveAttribute('href', '/about')

        const projectLink = screen.getByText('Project')
        expect(projectLink).toBeDefined()
        expect(projectLink.closest('a')).toHaveAttribute('href', '/project')

        const contactLink = screen.getByText('Contact')
        expect(contactLink).toBeDefined()
        expect(contactLink.closest('a')).toHaveAttribute('href', '/contact')
    })
})
