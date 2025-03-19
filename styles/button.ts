import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const Button: FC<InputHTMLAttributes<HTMLButtonElement>> = styled.button`
	align-items: center;
	background-color: ${theme.colors.black};
	border: 0;
	border-radius: ${theme.borderRadius.lg};
	color: ${theme.colors.white};
	display: inline-flex;
	font-size: ${theme.typography.fontSize.md};
	font-weight: ${theme.typography.fontWeight.medium};
	justify-content: center;
	padding: ${theme.spacing[4]};
	text-align: center;
	transition: ${theme.transitions.default};
	vertical-align: middle;
	user-select: none;
	white-space: nowrap;
	width: 100%;

	&:hover:not(:disabled) {
		opacity: .8;
	}
	
	&:focus {
		outline: 0;
	}
	
	&:disabled {
		opacity: .65;
		cursor: not-allowed;
	}
`;
