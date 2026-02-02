import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Nav } from './Nav'
import { vi } from 'vitest'
import React from 'react'

type MockLinkProps = {
    children: React.ReactNode;
    href: string;
};

vi.mock('next/link', () => {
    return {
        __esModule: true,
        default: ({ children, href, ...props }: MockLinkProps) => {
            return <a href={href} {...props}>{children}</a>
        }
    }
})

describe('Nav', () => {
    it('renders navigation links', () => {
        const items = [
            { label: 'Test Link', href: '/test' },
        ]
        render(<Nav items={items} />)

        const link = screen.getByText('Test Link')
        expect(link).toBeDefined()
        expect(link.closest('a')).toHaveAttribute('href', '/test')
    })
})
