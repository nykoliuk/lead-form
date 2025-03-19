'use client';

import {ChangeEvent, FC, FormEventHandler, RefObject, useRef, useState} from 'react';
import {Controller, FormProvider, useForm, UseFormReturn} from 'react-hook-form';
import {UseStateResult} from '@/hooks/use-state-result';
import {leadFormSchema} from '@/lib/schemas/lead-form-schema';
import {zodResolver} from '@hookform/resolvers/zod';
import {defaultLeadFormData, LeadFormData} from '@/types/lead-form-data';
import {countries, CountryCode} from '@/constants/country-code';
import {countryCodeToTitle} from '@/constants/country-code-to-title';
import {Visa, visas, visaToName} from '@/types/visa';
import {z} from 'zod';
import {ALLOWED_RESUME_TYPES} from '@/constants/allowed-resume-types';
import {MAX_RESUME_SIZE} from '@/constants/max-resume-size';
import {FormInput} from '@/styles/form/fomt-input';
import {FormSelect} from '@/styles/form/form-select';
import {FormError} from '@/styles/form/form-error';
import {FormGroup} from '@/styles/form/form-group';
import {FormTextarea} from '@/styles/form/form-textarea';
import {FormCheckboxInput, FormCheckboxLabel, FormCheckboxWrapper, FormCheckmark} from '@/styles/form/form-checkbox';
import {AlertCircle, Upload, X} from 'lucide-react';
import {
	FormFileInput,
	FormFileUploadButton,
	FormFileUploadContainer,
	FormFileUploadName, FormFileUploadPreview, FormFileUploadRemoveButton,
	FormFileUploadSize,
} from '@/styles/form/file-upload';
import {Button} from '@/styles/button';
import {Alert, AlertIcon, AlertText} from '@/styles/alert';
import {ThankYouScreen} from '@/components/leads/lead-form/thank-you-screen';
import {
	FormBody,
	FormContainer,
	FormHeader,
	FormSection, FormSectionHeader, FormText, FormTitle,
	PageHeader, PageHeaderContainer, PageHeaderLogo, PageHeaderTitle,
} from '@/components/leads/lead-form/styles';
import Image from 'next/image';

type LeadFormValues = z.infer<typeof leadFormSchema>
export const LeadForm: FC = () => {
	const [requestError, setRequestError]: UseStateResult<boolean> = useState(false);
	const [submitting, setIsSubmitting]: UseStateResult<boolean> = useState(false);
	const [success, setSuccess]: UseStateResult<boolean> = useState(false);
	const [file, setFile]: UseStateResult<File | null> = useState<File | null>(null);
	const [fileError, setFileError]: UseStateResult<string | null> = useState<string | null>(null);

	const form: UseFormReturn<LeadFormValues> = useForm({
		resolver: zodResolver(leadFormSchema),
		defaultValues: defaultLeadFormData,
		mode: 'onBlur',
		progressive: true,
	});

	const {
		control,
		formState: {errors},
		handleSubmit,
		register,
		reset,
		setError,
	}: UseFormReturn<LeadFormValues> = form;

	function handleFileChange(e: ChangeEvent<HTMLInputElement>): void {
		e.preventDefault();

		const selectedFile: File | undefined = e.target.files?.[0];
		setFileError(null);

		if (!selectedFile) {
			setFile(null);
			setFileError('Please select a file');
			return;
		}

		if (!ALLOWED_RESUME_TYPES.includes(selectedFile.type)) {
			setFile(null);
			setFileError('Invalid file type. Only PDF, DOC, and DOCX are allowed.');
			return;
		}

		if (selectedFile.size > MAX_RESUME_SIZE) {
			setFile(null);
			setFileError('File size must be less than 5MB');
			return;
		}

		setFile(selectedFile);
		setFileError(null);
	}

	function removeFile(): void {
		setFile(null);
		setFileError(null);
	}

	function resetForm(): void {
		setSuccess(false);
		reset(defaultLeadFormData);
		removeFile();
	}

	async function handleFileUpload() {
		if (!file) {
			setFileError('Please select a file');
			setIsSubmitting(false);
			return;
		}

		try {
			const fileFormData: FormData = new FormData();
			fileFormData.append('resume', file);

			const response: Response = await fetch('/api/upload', {
				method: 'POST',
				body: fileFormData,
			});

			if (!response.ok) {
				const errorData = await response.json();
				setRequestError(true);
				setError('resume', {
					type: 'manual',
					message: errorData.error || 'Failed to upload file',
				});
			}

			const result = await response.json();

			return result.fileUrl;
		} catch (error) {
			console.error('Error uploading file:', error);
			throw error;
		}
	}

	const onSubmit: FormEventHandler<HTMLFormElement> = handleSubmit(async (formData: LeadFormValues) => {
		setIsSubmitting(true);
		setSuccess(false);

		const resumeUrl = await handleFileUpload();
		if (!resumeUrl) {
			setFileError('Please select a file');
			setIsSubmitting(false);
			return;
		}

		const leadData: LeadFormData = {
			...formData,
			resume: resumeUrl,
		};

		fetch('/api/leads/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(leadData),
		})
			.then((response: Response) => response.json())
			.then((data) => {
				if (data.error) {
					throw new Error(data.error);
				}
				setSuccess(true);
				reset(defaultLeadFormData);
				setFile(null);
			})
			.catch((error) => {
				console.error('Error:', error);
				setRequestError(true);
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	});

	return <>
		{success ? (
			<ThankYouScreen resetForm={resetForm} />
		) : (
			<FormProvider {...form}>
				<PageHeader>
					<PageHeaderContainer>
						<PageHeaderLogo>almā</PageHeaderLogo>
						<PageHeaderTitle>
							Get An Assessment
							<br />
							Of Your Immigration Case
						</PageHeaderTitle>
					</PageHeaderContainer>
				</PageHeader>
				<FormContainer>
					<FormHeader>
						<Image
							src="/info.jpg"
							alt="Want to understand your visa options?"
							width={80}
							height={80}
						/>
						<FormTitle>
							Want to understand your visa options?
						</FormTitle>
						<FormText>
							Submit the form below and our team of experienced attorneys will review your
							information and send a preliminary assessment of your case based on your goals.
						</FormText>
					</FormHeader>
					<FormBody>
						<form onSubmit={handleSubmit(onSubmit)} noValidate>
							<FormSection>
								<FormGroup>
									<FormInput
										{...register('firstName')}
										placeholder="First Name"
										aria-invalid={!!errors.firstName}
									/>
									{errors.firstName && (
										<FormError role="alert">
											{errors.firstName.message?.toString() || 'Invalid input'}
										</FormError>
									)}
								</FormGroup>
								<FormGroup>
									<FormInput
										{...register('lastName')}
										placeholder="Last Name"
										aria-invalid={!!errors.lastName}
									/>
									{errors.lastName && (
										<FormError role="alert">
											{errors.lastName.message?.toString() || 'Invalid input'}
										</FormError>
									)}
								</FormGroup>
								<FormGroup>
									<FormInput
										{...register('email')}
										type="email"
										placeholder="Email"
										aria-invalid={!!errors.email}
									/>
									{errors.email && (
										<FormError role="alert">
											{errors.email.message?.toString() || 'Invalid input'}
										</FormError>
									)}
								</FormGroup>
								<FormGroup>
									<FormSelect
										defaultValue=""
										{...register('country')}
										aria-invalid={!!errors.country}
									>
										<option value="" disabled>
											Country of Citizenship
										</option>
										{countries.map((countryCode: CountryCode) => (
											<option key={countryCode} value={countryCode}>
												{countryCodeToTitle[countryCode]}
											</option>
										))}
									</FormSelect>
									{errors.country && (
										<FormError role="alert">
											{errors.country.message?.toString() || 'Select a country'}
										</FormError>
									)}
								</FormGroup>
								<FormGroup>
									<FormInput
										{...register('linkedIn')}
										placeholder="LinkedIn / Personal Website URL"
										aria-invalid={!!errors.linkedIn}
									/>
									{errors.linkedIn && (
										<FormError role="alert">
											{errors.linkedIn.message?.toString() || 'Invalid input'}
										</FormError>
									)}
								</FormGroup>
								<FormGroup>
									<FormFileUploadContainer>
										{!file ? <>
											<FormFileUploadButton>
												<Upload size={24}/>
												Upload resume or CV
												<FormFileInput
													type="file"
													id="resumeFile"
													onChange={handleFileChange}
													accept={ALLOWED_RESUME_TYPES.join(',')}
												/>
											</FormFileUploadButton>

											<FormFileUploadSize>
												PDF or Word document (max 5MB)
											</FormFileUploadSize>
										</> : (
											<FormFileUploadPreview>
												<FormFileUploadName>
													{file.name}
												</FormFileUploadName>
												<FormFileUploadRemoveButton
													type="button"
													onClick={removeFile}
													aria-label="Remove file"
												>
													<X size={18}/>
												</FormFileUploadRemoveButton>
											</FormFileUploadPreview>
										)}
										{(fileError || errors.resume) && (
											<FormError role="alert">
												{fileError || errors.resume?.message?.toString() || 'Invalid input'}
											</FormError>
										)}
									</FormFileUploadContainer>
								</FormGroup>
							</FormSection>
							<FormSection>
								<FormSectionHeader>
									<Image
										src="/cube.jpg"
										alt="Visa categories of interest?"
										width={80}
										height={80}
									/>
									<FormTitle>
										Visa categories of interest?
									</FormTitle>
								</FormSectionHeader>
								<FormGroup>
									<Controller
										name="visas"
										control={control}
										render={({field}) => <>
											{visas.map((visa: Visa) => (
												<FormCheckboxWrapper key={visa}>
													<FormCheckboxLabel>
														<FormCheckboxInput
															type="checkbox"
															checked={field.value.includes(visa)}
															onChange={(e: ChangeEvent<HTMLInputElement>) => {
																const checked: boolean = e.target.checked
																const updatedValues = checked
																	? [...field.value, visa]
																	: field.value.filter((val: Visa) => val !== visa)
																field.onChange(updatedValues)
															}}
															aria-invalid={errors.visas ? "true" : "false"}
														/>
														<FormCheckmark/>
														{visaToName[visa]}
													</FormCheckboxLabel>
												</FormCheckboxWrapper>
											))}
										</>}
									/>
									{errors.visas && (
										<FormError role="alert">
											{errors.visas.message?.toString() || 'Invalid input'}
										</FormError>
									)}
								</FormGroup>
							</FormSection>
							<FormSection>
								<FormSectionHeader>
									<Image
										src="/heart.jpg"
										alt="How can we help you?"
										width={80}
										height={80}
									/>
									<FormTitle>
										How can we help you?
									</FormTitle>
								</FormSectionHeader>
								<FormGroup>
									<FormTextarea
										id="comment"
										{...register('comment')}
										placeholder="What is your current status and when does it expire? What is your past immigration history? Are you looking for long-term permanent residency or short-term employment visa or both? Are there any timeline considerations?"
										aria-invalid={!!errors.linkedIn}
									/>
									{errors.comment && (
										<FormError role="alert">
											{errors.comment.message?.toString() || 'Invalid input'}
										</FormError>
									)}
								</FormGroup>
							</FormSection>
							{requestError && (
								<Alert role="alert">
									<AlertIcon>
										<AlertCircle size={20}/>
									</AlertIcon>
									<AlertText>
										There was an error submitting your form. Please try again.
									</AlertText>
								</Alert>
							)}
							<Button type="submit" disabled={submitting}>
								{submitting ? 'Sending...' : 'Submit'}
							</Button>
						</form>
					</FormBody>
				</FormContainer>
			</FormProvider>
		)}
	</>;
};
