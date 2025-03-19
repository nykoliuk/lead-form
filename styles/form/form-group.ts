import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const FormGroup: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	margin-bottom: ${theme.spacing['6']};
`;
