import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
    it('renders correctly', () => {
        render(<Input placeholder="Email" />)
        const input = screen.getByPlaceholderText('Email')
        expect(input).toBeDefined()
        expect(input.className).toContain('border-tech-black')
    })

    it('renders error state', () => {
        render(<Input error />)
        const input = screen.getByRole('textbox')
        expect(input.className).toContain('border-signal-red')
    })
})
