import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Nav } from './Nav'
import { vi } from 'vitest'

vi.mock('next/link', () => {
    return {
        __esModule: true,
        default: ({ children, href, ...props }: any) => {
            return <a href={href} {...props}>{children}</a>
        }
    }
})

describe('Nav', () => {
    it('renders navigation links', () => {
        // We mock the navigation items
        const items = [
            { label: 'Work', href: '/work' },
            { label: 'Services', href: '/services' },
        ]
        render(<Nav items={items} />)

        // Check if links exist
        const workLink = screen.getByText('Work')
        expect(workLink).toBeDefined()
        expect(workLink.closest('a')).toHaveAttribute('href', '/work')
    })
})
