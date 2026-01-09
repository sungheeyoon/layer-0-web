import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
    it('renders the blueprint concept text', () => {
        render(<Hero />)
        expect(screen.getByText(/The Essential Blueprint/i)).toBeDefined()
        expect(screen.getByText(/본질의 청사진/i)).toBeDefined()
    })

    it('renders canvas for drawing animation', () => {
        render(<Hero />)
        // Check if drawing area exists (maybe via testid)
        expect(screen.getByTestId('blueprint-canvas')).toBeDefined()
    })
})
