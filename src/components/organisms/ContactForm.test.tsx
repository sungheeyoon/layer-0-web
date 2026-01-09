import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ContactForm } from './ContactForm'
import { contactSchema } from '@/lib/schemas/contact'

describe('Contact Schema', () => {
    it('validates correct input', () => {
        const result = contactSchema.safeParse({
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Hello Layer 0'
        })
        expect(result.success).toBe(true)
    })

    it('rejects invalid email', () => {
        const result = contactSchema.safeParse({
            name: 'John Doe',
            email: 'not-an-email',
            message: 'Hello'
        })
        expect(result.success).toBe(false)
    })
})

describe('ContactForm', () => {
    it('renders form fields', () => {
        render(<ContactForm />)
        expect(screen.getByLabelText(/Name/i)).toBeDefined()
        expect(screen.getByLabelText(/Email/i)).toBeDefined()
        expect(screen.getByLabelText(/Message/i)).toBeDefined()
        expect(screen.getByRole('button', { name: /Send/i })).toBeDefined()
    })
})
