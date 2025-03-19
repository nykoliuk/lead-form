import styled from 'styled-components';
import { theme } from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const FormFileUploadContainer: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${theme.spacing['2']};
`;

export const FormFileUploadButton: FC<InputHTMLAttributes<HTMLLabelElement>> = styled.label`
	display: flex;
	align-items: center;
	gap: ${theme.spacing['3']};
	padding: ${theme.spacing['4']};
	border: 1px solid ${theme.colors.muted};
	border-radius: ${theme.borderRadius.lg};
	cursor: pointer;
	font-size: ${theme.typography.fontSize.md};
	color: ${theme.colors.text.primary};
	transition: ${theme.transitions.default};
	
	&:hover {
		background-color: ${theme.colors.muted}50;
	}
`;

export const FormFileInput: FC<InputHTMLAttributes<HTMLInputElement>> = styled.input`
	display: none;
`;

export const FormFileUploadSize: FC<InputHTMLAttributes<HTMLParagraphElement>> = styled.p`
	font-size: ${theme.typography.fontSize.xs};
	color: ${theme.colors.text.secondary};
`;

export const FormFileUploadPreview: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	border: 1px solid ${theme.colors.muted};
	border-radius: ${theme.borderRadius.lg};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${theme.spacing['4']};
`;

export const FormFileUploadName: FC<InputHTMLAttributes<HTMLParagraphElement>> = styled.p`
	font-size: ${theme.typography.fontSize.sm};
	color: ${theme.colors.text.primary};
	margin: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 250px;
`;

export const FormFileUploadRemoveButton: FC<InputHTMLAttributes<HTMLButtonElement>> = styled.button`
	background: none;
	border: none;
	color: ${theme.colors.text.secondary};
	cursor: pointer;
	padding: ${theme.spacing['1']};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: ${theme.transitions.default};
	
	&:hover {
		color: ${theme.colors.danger};
	}
	
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;
