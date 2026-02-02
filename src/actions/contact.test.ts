import { describe, it, expect } from 'vitest';
import { submitContact } from './contact';

describe('submitContact Server Action', () => {
    it('returns success for valid data', async () => {
        const formData = new FormData();
        formData.append('name', 'John Doe');
        formData.append('email', 'john@example.com');
        formData.append('message', 'Hello, this is a test message.');

        const result = await submitContact({}, formData);

        expect(result.success).toBe(true);
        expect(result.message).toContain('success');
        expect(result.errors).toBeUndefined();
    });

    it('returns validation errors for invalid data', async () => {
        const formData = new FormData();
        formData.append('name', ''); // Empty name
        formData.append('email', 'invalid-email'); // Invalid email
        formData.append('message', 'Hi'); // Too short

        const result = await submitContact({}, formData);

        expect(result.success).toBe(false);
        expect(result.errors).toBeDefined();
        expect(result.errors?.name).toBeDefined();
        expect(result.errors?.email).toBeDefined();
        // message validation might depend on min length, assuming it fails or not checking specifically here
    });
});
