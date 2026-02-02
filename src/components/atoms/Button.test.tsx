import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
    it('renders correctly with default props', () => {
        render(<Button>Click me</Button>)
        const button = screen.getByRole('button', { name: /click me/i })
        expect(button).toBeDefined()
        // It should have the base classes
        expect(button.className).toContain('inline-flex')
    })

    it('renders primary variant correctly', () => {
        render(<Button variant="primary">Primary</Button>)
        const button = screen.getByRole('button', { name: /primary/i })
        expect(button.className).toContain('bg-tech-black')
        expect(button.className).toContain('text-off-white')
    })

    it('renders outline variant correctly and handles click', async () => {
        const handleClick = vi.fn()
        render(<Button variant="outline" onClick={handleClick}>Outline</Button>)
        const button = screen.getByRole('button', { name: /outline/i })
        expect(button.className).toContain('border')
        expect(button.className).toContain('border-tech-black')

        // Test click
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('renders as child component when asChild is true', () => {
        render(
            <Button asChild>
                <a href="/test">Link Button</a>
            </Button>
        )
        const link = screen.getByRole('link', { name: /link button/i })
        expect(link).toBeDefined()
        expect(link).toHaveAttribute('href', '/test')
        expect(link.className).toContain('inline-flex') // Should inherit button styles
    })
})
