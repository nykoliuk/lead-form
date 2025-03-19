import {z, ZodSchema} from 'zod';

export const leadFormSchema: ZodSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	email: z.string().email('Invalid email address'),
	linkedIn: z
		.string()
		.min(1, 'LinkedIn / Personal Website URL is required')
		.url('Please enter a valid URL'),
	visas: z.array(z.string()).min(1, 'At least one visa type is required'),
	comment: z.string().min(1, 'Additional info is required'),
	country: z.string().min(1, 'Country is required'),
	resume: z.string().optional(),
});
