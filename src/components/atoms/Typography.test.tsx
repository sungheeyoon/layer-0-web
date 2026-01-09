import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Typography } from './Typography'

describe('Typography', () => {
    it('renders H1 with correct styles (Display)', () => {
        // This will initially fail because Typography component does not exist/export H1
        render(<Typography variant="h1">Layer 0</Typography>)
        const heading = screen.getByText('Layer 0')
        expect(heading).toBeDefined()
        expect(heading.tagName).toBe('H1')
        expect(heading.className).toContain('text-4xl') // Checking for tailwind class
    })

    it('renders P with correct styles (Body)', () => {
        render(<Typography variant="body">Description</Typography>)
        const p = screen.getByText('Description')
        expect(p.tagName).toBe('P')
    })
})
