import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Logo } from './Logo'

describe('Logo', () => {
    it('renders a link to the homepage', () => {
        render(<Logo />)
        const link = screen.getByRole('link', { name: /Back to Homepage/i })
        expect(link).toBeDefined()
        expect(link).toHaveAttribute('href', '/')
    })
})
