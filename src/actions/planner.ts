'use server'

import { plannerSchema } from '@/lib/schemas/planner'
import { FEATURES } from '@/lib/data/features';

export type PlannerFormState = {
    success?: boolean;
    errors?: {
        name?: string[];
        email?: string[];
        features?: string[];
    };
    message?: string;
}

export async function submitPlan(prevState: PlannerFormState, formData: FormData): Promise<PlannerFormState> {
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate processing

    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        features: formData.get('features'),
    }

    const validatedFields = plannerSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please check your inputs.',
        }
    }

    const { name, email, features } = validatedFields.data;

    // Calculate details for the "email" (simulation)
    const selectedFeatures = FEATURES.filter(f => features.includes(f.id));
    const totalEst = selectedFeatures.reduce((acc, f) => acc + f.basePrice, 0);

    console.log(`[Plan Request] From: ${name} (${email})`);
    console.log(`[Plan Request] Features: ${features.join(', ')}`);
    console.log(`[Plan Request] Total Est: $${totalEst}`);

    return {
        success: true,
        message: 'Plan received! We are reviewing your blueprint.',
    }
}
