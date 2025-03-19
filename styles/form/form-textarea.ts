import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const FormTextarea: FC<InputHTMLAttributes<HTMLTextAreaElement>> = styled.textarea`
	width: 100%;
	padding: ${theme.spacing['4']};
	font-size: ${theme.typography.fontSize.md};
	border: 1px solid ${theme.colors.muted};
	border-radius: ${theme.borderRadius.lg};
	transition: ${theme.transitions.default};
	min-height: 160px;
	resize: vertical;
	box-shadow: none;
	
	&:focus {
		outline: none;
		border-color: ${theme.colors.primary};
	}
	
	&::placeholder {
		color: ${theme.colors.text.secondary};
	}
	
	&[aria-invalid='true'] {
		&,
		&:focus {
			border-color: ${theme.colors.danger};
		}
	}
`;
