import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const FormCheckboxWrapper: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: ${theme.spacing['2']};
`;

export const FormCheckboxLabel: FC<InputHTMLAttributes<HTMLLabelElement>> = styled.label`
	display: flex;
	align-items: center;
	cursor: pointer;
	user-select: none;
`;

export const FormCheckboxInput: FC<InputHTMLAttributes<HTMLInputElement>> = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
	
	&:checked ~ span {
		background-color: ${theme.colors.primary};
		border-color: ${theme.colors.primary};
		
		&:after {
			display: block;
		}
	}
`;

export const FormCheckmark: FC<InputHTMLAttributes<HTMLSpanElement>> = styled.span`
	position: relative;
	height: 20px;
	width: 20px;
	background-color: ${theme.colors.background};
	border: 1px solid ${theme.colors.muted};
	border-radius: ${theme.borderRadius.sm};
	margin-right: ${theme.spacing['2']};
	transition: ${theme.transitions.default};
	
	&:after {
		content: "";
		position: absolute;
		display: none;
		left: 6px;
		top: 2px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 2px 2px 0;
		transform: rotate(45deg);
	}
`;
