import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock IntersectionObserver for Framer Motion
const IntersectionObserverMock = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

import React from 'react';

vi.mock('next/link', () => {
    return {
        __esModule: true,
        default: ({ children, href, ...props }: any) => {
            return React.createElement('a', { href, ...props }, children)
        }
    }
})
