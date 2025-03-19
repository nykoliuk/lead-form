'use client';

import {FC, useEffect, useState} from 'react';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {ReadonlyURLSearchParams, useRouter, useSearchParams} from 'next/navigation';
import {UseStateResult} from '@/hooks/use-state-result';
import {FormProvider, useForm, UseFormReturn} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {loginFormSchema} from '@/lib/schemas/login-form-schema';
import Cookies from 'js-cookie';
import {z} from 'zod';
import {
	CardContent,
	CardHeader,
	CardTitle,
	LoginContainer,
	LoginFormSection,
	PageLogo,
	StyledCard,
} from '@/components/login-form/styles';
import {Alert, AlertIcon, AlertText} from '@/styles/alert';
import {FormGroup} from '@/styles/form/form-group';
import {FormInput} from '@/styles/form/fomt-input';
import {FormError} from '@/styles/form/form-error';
import {Button} from '@/styles/button';
import {defaultLoginFormData} from '@/types/login-form-data';
import {AlertCircle} from 'lucide-react';

const TOKEN: string = process.env.JWT_SECRET || '';
type LoginFormValues = z.infer<typeof loginFormSchema>;
export const LoginForm: FC = () => {
	const router: AppRouterInstance = useRouter();
	const [error, setError]: UseStateResult<string | null> = useState<string | null>(null);
	const [isLoading, setIsLoading]: UseStateResult<boolean> = useState(false);

	const form: UseFormReturn<LoginFormValues> = useForm({
		resolver: zodResolver(loginFormSchema),
		defaultValues: defaultLoginFormData,
		mode: 'onBlur',
		progressive: true,
	});

	const {
		formState: {errors},
		handleSubmit,
		register,
	}: UseFormReturn<LoginFormValues> = form;

	useEffect(() => {
		const token: string | null = Cookies.get('auth_token') || localStorage.getItem('auth_token');
		if (token) {
			router.push('/dashboard');
		}
	}, [router]);

	async function onSubmit(values: LoginFormValues) {
		setIsLoading(true);
		setError(null);

		try {
			const response: Response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			});

			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.error || 'Invalid email or password');
			}

			if (!data.user) {
				setError('Incorrect email or password');
				return;
			}

			Cookies.set('auth_token', TOKEN, {expires: 7, path: '/', sameSite: 'strict'});
			localStorage.setItem('auth_token', TOKEN);
			localStorage.setItem('user', JSON.stringify(data.user));
			router.push('/dashboard');
		} catch (error: any) {
			setError(error.message.includes('Invalid') ? error.message : 'An error occurred. Please try again.');
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<LoginContainer>
			<PageLogo>almā</PageLogo>
			<StyledCard>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<p>Enter your credentials to access the admin dashboard</p>
				</CardHeader>
				<CardContent>
					<FormProvider {...form}>
						<form onSubmit={handleSubmit(onSubmit)} noValidate>
							<LoginFormSection>
								<FormGroup>
									<FormInput {...register('email')} type="email" placeholder="admin@example.com" />
									{errors.email && (
										<FormError role="alert">
											{errors.email.message?.toString() || 'Invalid input'}
										</FormError>
									)}
								</FormGroup>
								<FormGroup>
									<FormInput {...register('password')} type="password" placeholder="••••••" />
									{errors.password && (
										<FormError role="alert">
											{errors.password.message?.toString() || 'Invalid input'}
										</FormError>
									)}
								</FormGroup>
							</LoginFormSection>
							{error && (
								<Alert role="alert">
									<AlertIcon>
										<AlertCircle size={20} />
									</AlertIcon>
									<AlertText>{error}</AlertText>
								</Alert>
							)}
							<Button type="submit" disabled={isLoading}>
								{isLoading ? 'Logging in...' : 'Login'}
							</Button>
						</form>
					</FormProvider>
				</CardContent>
			</StyledCard>
		</LoginContainer>
	);
};
