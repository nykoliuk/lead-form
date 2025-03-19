import {supabase} from '@/lib/db/supabase-client';
import {SafeParseReturnType, z, ZodSchema} from 'zod';
import {LeadFormData} from '@/types/lead-form-data';
import {leadFormSchema} from '@/lib/schemas/lead-form-schema';

export async function POST(req: Request): Promise<Response> {
	try {
		const formData: FormData = await req.json();
		const validationResult: SafeParseReturnType<LeadFormData, any> = leadFormSchema.safeParse(formData);

		if (!validationResult.success) {
			return new Response(JSON.stringify({error: validationResult.error.errors[0].message}), {
				status: 400,
			});
		}

		const validatedData = validationResult.data;

		const visasString = Array.isArray(validatedData.visas) ? validatedData.visas.join(',') : validatedData.visas;

		const newLead: LeadFormData = {
			firstName: validatedData.firstName,
			lastName: validatedData.lastName,
			email: validatedData.email,
			linkedIn: validatedData.linkedIn,
			visas: visasString,
			comment: validatedData.comment || '',
			resume: validatedData.resume,
			country: validatedData.country || '',
		};

		const {data, error} = await supabase.from('leads').insert([newLead]).select().single();

		if (error) {
			console.error('Error inserting lead:', error);
			return new Response(JSON.stringify({error: 'Failed to create lead record'}), {
				status: 500,
			});
		}

		return new Response(
			JSON.stringify({
				success: true,
				message: 'Lead created successfully',
				data,
			}),
			{
				status: 200,
			}
		);
	} catch (error) {
		console.error('Unexpected error:', error);
		return new Response(JSON.stringify({error: 'An unexpected error occurred during lead creation'}), {
			status: 500,
		});
	}
}
