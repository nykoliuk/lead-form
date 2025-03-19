import {theme} from '@/styles/theme';
import styled from 'styled-components';
import {FC, InputHTMLAttributes} from 'react';

export const ThankYouContainer: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: ${theme.spacing['8']} ${theme.spacing['4']};
	background-color: ${theme.colors.background};
	text-align: center;
`;

export const ThankYouTitle: FC<InputHTMLAttributes<HTMLHeadingElement>> = styled.h1`
	font-size: ${theme.typography.fontSize.xl};
	margin-bottom: ${theme.spacing['4']};
`;

export const ThankYouText: FC<InputHTMLAttributes<HTMLParagraphElement>> = styled.p`
	font-weight: ${theme.typography.fontWeight.bold};
	margin-bottom: ${theme.spacing['6']};
`;

export const ThankYouFooter: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	margin: 0 auto;
	max-width: 400px;
	width: 100%;
`;
