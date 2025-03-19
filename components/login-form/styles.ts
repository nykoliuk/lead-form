import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const PageLogo: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	font-size: ${theme.typography.fontSize['4xl']};
	font-weight: ${theme.typography.fontWeight.bold};
	margin-bottom: ${theme.spacing['6']};
`;

export const LoginContainer: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
`;

export const LoginFormSection: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	margin-bottom: ${theme.spacing['12']};
`;

export const StyledCard: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	border: 1px solid ${theme.colors.muted};
	border-radius: ${theme.borderRadius.lg};
	max-width: 500px;
	width: 100%;
`;

export const CardHeader: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	padding: ${theme.spacing['6']} ${theme.spacing['6']} 0;
`;

export const CardTitle: FC<InputHTMLAttributes<HTMLHeadingElement>> = styled.h1`
	font-size: ${theme.typography.fontSize['2xl']};
	font-weight: 600;
	margin-bottom: ${theme.spacing['2']};
`;

export const CardContent: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	padding: ${theme.spacing['6']};
`;
