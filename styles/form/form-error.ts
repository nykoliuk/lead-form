import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const FormError: FC<InputHTMLAttributes<HTMLParagraphElement>> = styled.p`
	color: ${theme.colors.danger};
	font-size: ${theme.typography.fontSize.xs};
	margin-top: ${theme.spacing['1']};
`;
