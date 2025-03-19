import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const FormSelect: FC<InputHTMLAttributes<HTMLSelectElement>> = styled.select`
	width: 100%;
	padding: ${theme.spacing['4']} ${theme.spacing['12']} ${theme.spacing['4']} ${theme.spacing['4']};
	font-size: ${theme.typography.fontSize.md};
	border: 1px solid ${theme.colors.muted};
	border-radius: ${theme.borderRadius.lg};
	background-color: ${theme.colors.background};
	transition: ${theme.transitions.default};
	appearance: none;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: right ${theme.spacing['4']} center;
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
