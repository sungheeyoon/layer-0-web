import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Grid } from './Grid'

describe('Grid', () => {
    it('renders the grid container', () => {
        render(<Grid data-testid="grid-system" />)
        const grid = screen.getByTestId('grid-system')
        expect(grid).toBeDefined()
        // It should have the correct background and grid lines
        expect(grid.className).toContain('fixed')
        expect(grid.className).toContain('inset-0')
        expect(grid.className).toContain('bg-off-white')
    })
})
