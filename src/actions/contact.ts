'use server'

import { contactSchema } from '@/lib/schemas/contact'

export type FormState = {
    success?: boolean;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    message?: string;
}

export async function submitContact(prevState: FormState, formData: FormData): Promise<FormState> {
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    }

    const validatedFields = contactSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Validation failed. Please check your inputs.',
        }
    }

    // Here you would typically integrate with an email provider (e.g., Resend, SendGrid)
    // For now, we simulate success.

    return {
        success: true,
        message: 'Message sent successfully. We will get back to you shortly.',
    }
}
