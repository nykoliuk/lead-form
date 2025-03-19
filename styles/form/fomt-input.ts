import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const FormInput: FC<InputHTMLAttributes<HTMLInputElement>> = styled.input`
	width: 100%;
	padding: ${theme.spacing['4']};
	font-size: ${theme.typography.fontSize.md};
	border: 1px solid ${theme.colors.muted};
	border-radius: ${theme.borderRadius.lg};
	transition: ${theme.transitions.default};
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
