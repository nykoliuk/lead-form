import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const Alert: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	display: flex;
	align-items: center;
	gap: ${theme.spacing['3']};
	padding: ${theme.spacing['4']};
	background-color: ${theme.colors.danger}10;
	border-left: 4px solid ${theme.colors.danger};
	border-radius: ${theme.borderRadius.lg};
	color: ${theme.colors.danger};
	margin-bottom: ${theme.spacing['4']};
`;

export const AlertIcon: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
`;

export const AlertText: FC<InputHTMLAttributes<HTMLParagraphElement>> = styled.p`
	font-size: ${theme.typography.fontSize.sm};
	font-weight: ${theme.typography.fontWeight.medium};
	margin: 0;
`;
