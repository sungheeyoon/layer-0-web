import { z } from 'zod';

export const plannerSchema = z.object({
    name: z.string().min(2, { message: "Name required." }),
    email: z.string().email({ message: "Valid email required." }),
    features: z.string().transform((str, ctx) => {
        try {
            const parsed = JSON.parse(str);
            if (!Array.isArray(parsed)) throw new Error("Invalid format");
            return parsed as string[];
        } catch {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Invalid features data",
            });
            return [];
        }
    }),
});

export type PlannerFormData = z.infer<typeof plannerSchema>;
