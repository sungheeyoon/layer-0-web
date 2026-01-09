'use client'

import { useActionState } from 'react'
import { submitContact } from '@/actions/contact'
import { Typography } from '@/components/atoms/Typography'
import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import { cn } from '@/utils/cn'

const initialState = {
    success: false,
    message: '',
}

export const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(submitContact, initialState)

    return (
        <div className="w-full max-w-md mx-auto p-6 border border-tech-black/10 bg-white/50 backdrop-blur-sm">
            <Typography variant="h3" className="mb-6">Contact Us</Typography>

            <form action={formAction} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-tech-black mb-1">
                        Name
                    </label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        error={!!state?.errors?.name}
                    />
                    {state?.errors?.name && (
                        <p className="text-signal-red text-xs mt-1">{state.errors.name[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-tech-black mb-1">
                        Email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        error={!!state?.errors?.email}
                    />
                    {state?.errors?.email && (
                        <p className="text-signal-red text-xs mt-1">{state.errors.email[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-tech-black mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className={cn(
                            "w-full border-b border-tech-black bg-transparent px-3 py-2 text-sm placeholder:text-tech-black/40 focus:outline-none focus:border-signal-red focus:border-b-2 transition-colors resize-none rounded-none",
                            state?.errors?.message && "border-signal-red"
                        )}
                        placeholder="Tell us about your project..."
                    />
                    {state?.errors?.message && (
                        <p className="text-signal-red text-xs mt-1">{state.errors.message[0]}</p>
                    )}
                </div>

                {state?.message && (
                    <div className={cn("p-3 text-sm", state.success ? "text-tech-black bg-green-50" : "text-signal-red bg-red-50")}>
                        {state.message}
                    </div>
                )}

                <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? 'Sending...' : 'Send Message'}
                </Button>
            </form>
        </div>
    )
}
