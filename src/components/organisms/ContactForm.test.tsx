import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ContactForm } from './ContactForm'
import { contactSchema } from '@/lib/schemas/contact'
import * as contactActions from '@/actions/contact'

vi.mock('@/actions/contact')

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

    it('shows success message on successful submission', async () => {
        const mockSubmit = vi.spyOn(contactActions, 'submitContact').mockResolvedValueOnce({
            success: true,
            message: 'Success!',
        })

        render(<ContactForm />)

        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } })
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } })
        fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello' } })
        fireEvent.click(screen.getByRole('button', { name: /Send/i }))

        await waitFor(() => {
            expect(screen.getByText('Success!')).toBeDefined()
        })
    })

    it('shows error message on failed submission', async () => {
        vi.spyOn(contactActions, 'submitContact').mockResolvedValueOnce({
            success: false,
            message: 'Validation failed',
            errors: {
                name: ['Name is required'],
                email: ['Invalid email address'],
                message: ['Message is too short']
            }
        })

        render(<ContactForm />)

        fireEvent.click(screen.getByRole('button', { name: /Send/i }))

        await waitFor(() => {
            expect(screen.getByText('Name is required')).toBeDefined()
            expect(screen.getByText('Invalid email address')).toBeDefined()
            expect(screen.getByText('Message is too short')).toBeDefined()
        })
    })

    it('disables button during submission', async () => {
        vi.spyOn(contactActions, 'submitContact').mockImplementation(async () => {
            await new Promise(resolve => setTimeout(resolve, 100));
            return { success: true, message: 'Success!' };
        });

        render(<ContactForm />)

        const button = screen.getByRole('button', { name: /Send/i })
        fireEvent.click(button)

        await waitFor(() => {
            expect(button).toBeDisabled()
            expect(screen.getByText('Sending...')).toBeDefined()
        })

        await waitFor(() => {
            expect(button).not.toBeDisabled()
        })
    })
})
