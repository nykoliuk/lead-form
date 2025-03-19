import {SafeParseReturnType, z} from 'zod';
import {loginFormSchema} from '@/lib/schemas/login-form-schema';
import {LoginFormData} from '@/types/login-form-data';
import {cookies} from 'next/headers';
import {TOKEN} from '@/constants/token';
import {supabase} from '@/lib/db/supabase-client';

export async function POST(request: Request): Promise<Response> {
	try {
		const body = await request.json()
		const validationResult: SafeParseReturnType<LoginFormData, any> = loginFormSchema.safeParse(body);

		if (!validationResult.success) {
			return new Response(JSON.stringify({error: validationResult.error.errors[0].message}), {
				status: 400,
			});
		}

		const {email, password} = validationResult.data;

		const {data: user, error} = await supabase
			.from('users')
			.select('id, email, name, role')
			.eq('email', email)
			.eq('password', password)
			.single()

		if (error || !user) {
			return new Response(JSON.stringify({error: 'Invalid credentials'}), {
				status: 401,
			});
		}

		(await cookies()).set({
			name: 'auth_token',
			value: TOKEN,
			httpOnly: true,
			path: '/',
			maxAge: 60 * 60 * 24, // 1 day
		});

		return new Response(
			JSON.stringify({
				user: {
					id: user.id,
					email: user.email,
					name: user.name,
					role: user.role,
				},
			}),
			{
				status: 200,
			}
		);
	} catch (error) {
		console.error('Login error:', error);
		return new Response(JSON.stringify({error: 'An error occurred during login'}), {
			status: 500,
		});
	}
}

