import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const PageHeader: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	background-color: ${theme.colors.primaryLight};
	padding: ${theme.spacing['8']} ${theme.spacing['4']} ${theme.spacing['16']};
	
	@media (min-width: ${theme.breakpoints.lg}) {
		padding: ${theme.spacing['16']} ${theme.spacing['4']} ${theme.spacing['20']};
	}
`;

export const PageHeaderContainer: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	max-width: 800px;
	margin: 0 auto;
`;

export const PageHeaderLogo: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	font-size: ${theme.typography.fontSize['3xl']};
	font-weight: ${theme.typography.fontWeight.bold};
	margin-bottom: ${theme.spacing['6']};

	@media (min-width: ${theme.breakpoints.lg}) {
		font-size: ${theme.typography.fontSize['4xl']};
	}
`;

export const PageHeaderTitle: FC<InputHTMLAttributes<HTMLHeadingElement>> = styled.h1`
	font-size: ${theme.typography.fontSize['xl']};
	line-height: ${theme.typography.lineHeight.tight};
	font-weight: ${theme.typography.fontWeight.black};
	margin-bottom: ${theme.spacing['2']};
	position: relative;
	z-index: 1;

	@media (min-width: ${theme.breakpoints.lg}) {
		font-size: ${theme.typography.fontSize['5xl']};
	}
`;

export const FormContainer: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	max-width: 650px;
	margin: 0 auto;
	padding: ${theme.spacing['8']} ${theme.spacing['4']} ${theme.spacing['16']};

	@media (min-width: ${theme.breakpoints.lg}) {
		padding: ${theme.spacing['16']} ${theme.spacing['4']} ${theme.spacing['16']};
	}
`;

export const FormSection: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	margin-bottom: ${theme.spacing['12']};
`;

export const FormSectionHeader: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	text-align: center;
`;

export const FormHeader: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	font-weight: ${theme.typography.fontWeight.bold};
	text-align: center;
	margin-bottom: ${theme.spacing[12]};

	@media (min-width: ${theme.breakpoints.lg}) {
		margin-bottom: ${theme.spacing['16']};
	}
`;

export const FormTitle: FC<InputHTMLAttributes<HTMLHeadingElement>> = styled.h2`
	font-size: ${theme.typography.fontSize.xl};
	line-height: ${theme.typography.lineHeight.tight};
	margin-bottom: ${theme.spacing['4']};

	@media (min-width: ${theme.breakpoints.lg}) {
		font-size: ${theme.typography.fontSize['2xl']};
	}
`;

export const FormText: FC<InputHTMLAttributes<HTMLParagraphElement>> = styled.p`
	@media (min-width: ${theme.breakpoints.lg}) {
		font-size: ${theme.typography.fontSize.lg};
	}
`;

export const FormBody: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	max-width: 500px;
	margin: 0 auto;
`;
